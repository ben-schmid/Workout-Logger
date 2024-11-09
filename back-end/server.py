from flask import Flask, request, jsonify
from user import User


app = Flask(__name__)


@app.route('/api/login', methods=['POST']) #listens for post requests from "/api/login"
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    status = User.validate_login(email, password)

    if status:
        #session['user'] = email #keep track of who is logged in
        return jsonify({"status": "successful"}), 201
    else:
        return jsonify({"status": "unsuccessful"}), 401
    


@app.route('/api/signup', methods=['POST'])
def create_account(): #listens for post requests from "/signup"
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    name = data.get('name')

    user_handler = User(email, password, name)

    if user_handler.create_user():
        return jsonify({"status": "account created"}), 201
    else:
        return jsonify({"status": "email already in use or invalid"}), 400  

if __name__ == "__main__":
    app.run(debug=True)