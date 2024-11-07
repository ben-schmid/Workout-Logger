from flask import Flask, request, jsonify, session
from user import User


app = Flask(__name__)


@app.route('/api/login', methods=['POST']) #listens for post requests from "/login"
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
    
if __name__ == "__main__":
    app.run(debug=True)

    # @app.route('/create_account', methods=['POST'])
    # def create_account(): #listens for post requests from "/create_account"
    #     data = request.get_json()
    #     email = data.get('email')
    #     password = data.get('password')

    #     if create_user(email, password):
    #         return jsonify({"status": "account created"})
    #     else:
    #         return jsonify({"status": "email already in use"})
    
    
