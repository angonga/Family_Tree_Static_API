"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Characters, Planets, Favorites
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import (
    JWTManager,
    jwt_required,
    get_jwt_identity,
    create_access_token,
)


api = Blueprint('api', __name__)


@api.route("/user", methods=["GET"])
def handle_hello():
    response_body = {"msg": "Hello, this is your GET /user response "}
    return jsonify(response_body), 200

# register endpoint
@api.route("/register", methods=["POST"])
def register_user():
    email = request.json.get['email']
    password = request.json.get['password']
    name = request.json['name']
    last_name = request.json['last_name']
    # validation of possible empty inputs
    if not email:
        return jsonify({"msg": "No email was provided"}), 400
    if not password:
        return jsonify({"msg": "No password was provided"}), 400
    if not name:
        return jsonify({"msg": "No name was provided"}), 400
    if not last_name:
        return jsonify({"msg": "No last name was provide"}), 400
    # busca usuario en BBDD
    user = User.query.filter_by(email=email).first()
    if user:
        # the user was not found on the database
        return jsonify({"msg": "User already exists"}), 401
    else:
        # crea nuevo usuario
        new_user = User()
        new_user.email = email
        new_user.password = password
        new_user.name = name
        new_user.last_name = last_name
        # crea registro nuevo en BBDD de
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"msg": "User registered successfully"}), 200

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # valida si estan vacios los ingresos
    if email is None:
        return jsonify({"msg": "No email was provided"}), 400
    if password is None:
        return jsonify({"msg": "No password was provided"}), 400
    # para proteger contraseñas usen hashed_password
    # busca usuario en BBDD
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"msg": "Invalid username or password"}), 401
    else:
        # crear token
        my_token = create_access_token(identity=user.id)
        return jsonify({"token": my_token})

@api.route("/protected", methods=["GET", "POST"])
# protege ruta con esta funcion
@jwt_required()
def protected():
    # busca la identidad del token
    current_id = get_jwt_identity()
    # busca usuarios en base de datos
    user = User.query.get(current_id)
    print(user)
    return jsonify({"id": user.id, "email": user.email}), 200

# add characters endpoint
@api.route("/characters", methods=["POST"])
def add_characters():
    name = request.json.get("name", None)
    birth_year = request.json.get("birth_year", None)
    gender = request.json.get("gender", None)
    height = request.json.get("height", None)
    skin_color = request.json.get("skin_color", None)
    hair_color = request.json.get("hair_color", None)
    eye_color = request.json.get("eye_color", None)
    # validation of possible empty inputs
    if name is None:
        return jsonify({"msg": "No name was provided"}), 400
    if birth_year is None:
        return jsonify({"msg": "No birth year was provided"}), 400
    if gender is None:
        return jsonify({"msg": "No gender was provided"}), 400
    if height is None:
        return jsonify({"msg": "No height was provided"}), 400
    if skin_color is None:
        return jsonify({"msg": "No skin color was provided"}), 400
    if hair_color is None:
        return jsonify({"msg": "No hair color was provided"}), 400
    if eye_color is None:
        return jsonify({"msg": "No eye color was provided"}), 400
    # busca character en BBDD
    character = Characters.query.filter_by(name=name).first()
    if character:
        # the  was found on the database
        return jsonify({"msg": "Character already exists"}), 401
    else:
        new_character = Characters()
        new_character.name = name
        new_character.birth_year = birth_year
        new_character.gender = gender
        new_character.height = height
        new_character.skin_color = skin_color
        new_character.hair_color = hair_color
        new_character.eye_color = eye_color
        db.session.add(new_character)
        db.session.commit()
        return jsonify({"msg": "Character created successfully"}), 200

@api.route("/characters", methods=["GET"])
def get_characters():

    allcharacters = Characters.query.all()
    allcharacters = list(map(lambda x: x.serialize(),allcharacters))

    return jsonify(allcharacters), 200

@api.route("/planets", methods=["POST"])
def add_planets():
    name = request.json.get("name", None)
    climate = request.json.get("climate", None)
    population = request.json.get("population", None)
    orbital_period = request.json.get("orbital_period", None)
    rotation_period = request.json.get("rotation_period", None)
    diameter = request.json.get("diameter", None)
    terrain = request.json.get("terrain", None)
    # validation of possible empty inputs
    if name is None:
        return jsonify({"msg": "No name was provided"}), 400
    if climate is None:
        return jsonify({"msg": "No climate was provided"}), 400
    if population is None:
        return jsonify({"msg": "No population was provided"}), 400
    if orbital_period is None:
        return jsonify({"msg": "No orbital_period was provided"}), 400
    if rotation_period is None:
        return jsonify({"msg": "No rotation_period was provided"}), 400
    if diameter is None:
        return jsonify({"msg": "No diameter was provided"}), 400
    if terrain is None:
        return jsonify({"msg": "No terrain was provided"}), 400
    # busca character en BBDD
    planet = Planets.query.filter_by(name=name).first()
    if planet:
        # the planet was found on the database
        return jsonify({"msg": "Planet already exists"}), 401
    else:
        new_planet = Planets()
        new_planet.name = name
        new_planet.climate = climate
        new_planet.population = population
        new_planet.orbital_period = orbital_period
        new_planet.rotation_period = rotation_period
        new_planet.diameter = diameter
        new_planet.terrain = terrain
        db.session.add(new_planet)
        db.session.commit()
        return jsonify({"msg": "Planet created successfully"}), 200    

@api.route("/planets", methods=["GET"])
def get_planets():

    allplanets = Planets.query.all()
    allplanets = list(map(lambda x: x.serialize(),allplanets))

    return jsonify(allplanets), 200

@api.route("/favorites", methods=["GET"])
def get_favorites():
        allfavorites = Favorites.query.all()
        allfavorites = list(map(lambda x: x.serialize(),allfavorites))
        return jsonify(allfavorites), 200

@api.route("/favorites", methods=["POST"])
def post_favorites():
    nfavorite = Favorites()
    nfavorite.planets_id = request.json['planets_id']
    nfavorite.characters_id = request.json['characters_id']
    nfavorite.user_id  = request.json['user_id']
    db.session.add(nfavorite)
    db.session.commit()
    return jsonify({"msg": "Favorite successfully created"}), 200

@api.route("/favorites/<int:id>", methods=["DELETE"])
def delete_favorites(id):
    if not id:
        return jsonify({'msg': 'ID is required'})
    dfavorite = Favorites.query.filter_by(id=id).first()
    if not dfavorite:
        return jsonify({'msg': 'Not favorite found'})
    db.session.delete(dfavorite)
    db.session.commit()
    return jsonify({"msg": "Favorite successfully deleted"}), 200  