from flask import Flask, request, jsonify, session
from user_handler import user_handler
from flask_cors import CORS
import logging


app = Flask(__name__)
CORS(app)
@app.route('/login', methods=['POST']) #listens for post requests from "/login"
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    status = user_handler.validate_login(email, password)

    if status:
        session['user'] = email #keep track of who is logged in
        return jsonify({"status": "successful"}), 200
    else:
        return jsonify({"status": "unsuccessful"}), 401
    
@app.route('/api/signup', methods=['POST'])
def create_account(): #listens for post requests from "/api/signup"
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    name = data.get('name')

    if not email or not password or not name:
        logging.warning("Signup attempt with missing fields")
        return jsonify({"status": "missing fields"}), 400

    if user_handler.create_user(email, password, name):
        logging.info(f"Account created for email: {email}")
        return jsonify({"status": "account created"}), 201
    else:
        logging.warning(f"Signup attempt with existing email: {email}")
        return jsonify({"status": "email already in use"}), 409
    
if __name__ == '__main__':
    app.run(host='localhost', port=5000)
