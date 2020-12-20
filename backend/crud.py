from classes.model.dwelling import Dwelling
from classes.model.user import User
from constants import *
from utils import filter_dwellings, does_user_exists

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

    def __init__(self, username, email, password):
        super().__init__(username, email, password)

class UserShema(ma.Schema):
    class Meta:
        fields = ('id', 'username', 'email', 'password')

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
def dwelling_update(id):
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
def dwelling_delete(id):
    dwelling = RestDwelling.query.get(id)
    if not dwelling: 
        abort(404)

    db.session.delete(dwelling)
    db.session.commit()
    return dwelling_schema.jsonify(dwelling) 

@app.route("/dwelling/doesUserExists", methods=["GET"])
@cross_origin()
def get_does_user_exists():
    users = RestUser.query.all()
    users = users_schema.dump(users)
    email = request.args.get('email')
    password = request.args.get('password')

    result = does_user_exists(email, password, users)
    return jsonify({'userExists' : result})


if __name__ == "__main__":
    db.create_all()
    app.run(debug=True, host='127.0.0.1')

