from classes.model.dwelling import Dwelling
from classes.model.user import User
from constants import *
from utils import filter_dwellings, can_user_be_logged_in, \
does_user_exists, generate_logged_in_value, did_user_login

from flask import Flask, request, jsonify, abort
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy

from flask_cors import CORS, cross_origin

import json
import copy

with open('secret.json') as secret:
    SECRET = json.load(secret)

DB_URI = "mysql+mysqlconnector://{user}:{password}@{host}:{port}/{db}".format(
    user=SECRET["user"],
    password=SECRET["password"],
    host=SECRET["host"],
    port=SECRET["port"],
    db=SECRET["db"],
)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DB_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

db = SQLAlchemy(app)
ma = Marshmallow(app)

class RestDwelling(Dwelling, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    img = db.Column(db.Text, unique=False)
    title = db.Column(db.String(90), unique=False)
    area_in_square_meters = db.Column(db.Float, unique=False)
    price_in_USD = db.Column(db.Float, unique=False)
    location = db.Column(db.String(48), unique=False)
    floors_count = db.Column(db.Integer, unique=False)
    swimming_pool = db.Column(db.Boolean, unique=False)
    description = db.Column(db.Text, unique=False)

    def __init__(self, img, title, area_in_square_meters, price_in_USD,\
        location, floors_count, swimming_pool, description):
        super().__init__(img, title, area_in_square_meters, price_in_USD,\
        location, floors_count, swimming_pool, description)

class DwellingShema(ma.Schema):
    class Meta:
        fields = ('id', 'img', 'title', 'area_in_square_meters',\
         'price_in_USD', 'location', 'floors_count', 'swimming_pool', 'description')

dwelling_schema = DwellingShema()
dwellings_schema = DwellingShema(many = True)

class RestUser(User, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(45), unique=True)
    email = db.Column(db.String(90), unique=True)
    password = db.Column(db.String(45), unique=False)
    logged_in_value = db.Column(db.Text, unique=False)

    def __init__(self, username, email, password, logged_in_value):
        super().__init__(username, email, password, logged_in_value)

class UserShema(ma.Schema):
    class Meta:
        fields = ('id', 'username', 'email', 'password', 'logged_in_value')

user_schema = UserShema()
users_schema = UserShema(many = True)


@app.route("/dwelling", methods=["GET"])
@cross_origin()
def get_dwellings():
    dwellings = RestDwelling.query.all()
    result = dwellings_schema.dump(dwellings)
    return jsonify({'dwellings' : result})


@app.route("/dwelling/filter", methods=["GET"])
@cross_origin()
def get_filtered_dwelling():
    dwellings = RestDwelling.query.all()
    dwellings = dwellings_schema.dump(dwellings)
    price = request.args.get('price')
    area = request.args.get('area')
    floors = request.args.get('floors')

    result = filter_dwellings(price, area, floors, dwellings)
    return jsonify({'dwellings' : result})


@app.route("/dwelling/<id>", methods=["GET"])
@cross_origin()
def get_dwelling(id):
    dwelling = RestDwelling.query.get(id)
    if not dwelling: 
        abort(404)
    return dwelling_schema.jsonify(dwelling)


@app.route("/dwelling", methods=["POST"])
# @cross_origin()
def add_dwelling():
    new_dwelling = RestDwelling(request.json['img'], request.json['title'], request.json['area_in_square_meters'], request.json['price_in_USD'],\
         request.json['location'], request.json['floors_count'], request.json['swimming_pool'], request.json['description'])
    
    db.session.add(new_dwelling)
    db.session.commit()
    return dwelling_schema.jsonify(new_dwelling)


@app.route("/dwelling/<id>", methods=["PUT"])
# @cross_origin()
def update_dwelling(id):
    dwelling = RestDwelling.query.get(id)
    if not dwelling: 
        abort(404)
    old_dwelling = copy.deepcopy(dwelling)
    dwelling.img = request.json['img']
    dwelling.title = request.json['title']
    dwelling.area_in_square_meters = request.json['area_in_square_meters']
    dwelling.price_in_USD = request.json['price_in_USD']
    dwelling.location = request.json['location']
    dwelling.floors_count = request.json['floors_count']
    dwelling.swimming_pool = request.json['swimming_pool']
    dwelling.description = request.json['description']

    db.session.commit()
    return dwelling_schema.jsonify(old_dwelling)


@app.route("/dwelling/<id>", methods=["DELETE"])
# @cross_origin()
def delete_dwelling(id):
    dwelling = RestDwelling.query.get(id)
    if not dwelling: 
        abort(404)

    db.session.delete(dwelling)
    db.session.commit()
    return dwelling_schema.jsonify(dwelling) 


@app.route("/user/login", methods=["POST"])
@cross_origin()
def login_user():
    users = RestUser.query.all()
    users = users_schema.dump(users)
    data = request.json

    result = can_user_be_logged_in(data['email'], data['password'], users)
    return jsonify({'loggedInValue' : result})


@app.route("/user/register", methods=["POST"])
@cross_origin()
def register_user():
    data = request.json
    users = RestUser.query.all()
    users_schema = UserShema(many = True, only = ['username', 'email'])
    users = users_schema.dump(users)

    exists = does_user_exists(data['username'],data['email'], users)
    if exists:
        result = exists
    else: 
        result = True
        logged_in_value = generate_logged_in_value(data['username']);
        new_user = RestUser(data['username'],data['email'], data['password'], logged_in_value)
        db.session.add(new_user)
        db.session.commit()

    return jsonify({'result' : result})



@app.route("/user/check_logged_in", methods=["POST"])
@cross_origin()
def check_logged_user_in():
    logged_in_value = request.json['loggedInValue']
    if logged_in_value == None:
        result = False
    else:
        users = RestUser.query.all()
        users_schema = UserShema(many = True, only = ['logged_in_value'])
        users = users_schema.dump(users)
        result = did_user_login(logged_in_value, users)

    return jsonify({'result' : result})


if __name__ == "__main__":
    db.create_all()
    app.run(debug=True, host='127.0.0.1')

