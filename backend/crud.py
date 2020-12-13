from classes.model.dwelling import Dwelling

from flask import Flask, request, jsonify, abort
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy

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
db = SQLAlchemy(app)
ma = Marshmallow(app)

class RestDwelling(Dwelling, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    area_in_square_meters = db.Column(db.Float, unique=False)
    price_in_USD = db.Column(db.Float, unique=False)
    district = db.Column(db.String(32), unique=False)
    balcony_count = db.Column(db.Integer, unique=False)

    def __init__(self,  area_in_square_meters = 0.0, price_in_USD = 0.0,\
                district = "Shwadchack", balcony_count = 0):
        super().__init__(area_in_square_meters, price_in_USD, district, balcony_count)

class DwellingShema(ma.Schema):
    class Meta:
        fields = ('id','area_in_square_meters', 'price_in_USD', 'district', 'balcony_count')

dwelling_schema = DwellingShema()
dwellings_schema = DwellingShema(many = True)


@app.route("/dwelling", methods=["GET"])
def get_dwellings():
    all_dwellings = RestDwelling.query.all()
    result = dwellings_schema.dump(all_dwellings)
    return jsonify({'dwellings' : result})


@app.route("/dwelling/<id>", methods=["GET"])
def get_dwelling(id):
    dwelling = RestDwelling.query.get(id)
    if not dwelling: 
        abort(404)
    return dwelling_schema.jsonify(dwelling)


@app.route("/dwelling", methods=["POST"])
def add_dwelling():
    new_dwelling = RestDwelling(request.json['area_in_square_meters'], request.json['price_in_USD'],\
         request.json['district'], request.json['balcony_count'])

    db.session.add(new_dwelling)
    db.session.commit()

    return dwelling_schema.jsonify(new_dwelling)


@app.route("/dwelling/<id>", methods=["PUT"])
def dwelling_update(id):
    dwelling = RestDwelling.query.get(id)
    if not dwelling: 
        abort(404)
    old_dwelling = copy.deepcopy(dwelling)
    dwelling.area_in_square_meters = request.json['area_in_square_meters']
    dwelling.price_in_USD = request.json['price_in_USD']
    dwelling.district = request.json['district']
    dwelling.balcony_count = request.json['balcony_count']

    db.session.commit()
    return dwelling_schema.jsonify(old_dwelling)


@app.route("/dwelling/<id>", methods=["DELETE"])
def dwelling_delete(id):
    dwelling = RestDwelling.query.get(id)
    if not dwelling: 
        abort(404)

    db.session.delete(dwelling)
    db.session.commit()
    return dwelling_schema.jsonify(dwelling) 


if __name__ == "__main__":
    db.create_all()
    app.run(debug=True, host='127.0.0.1')

