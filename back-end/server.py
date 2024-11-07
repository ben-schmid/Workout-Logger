from flask import Flask, request, jsonify, session
from user_handler import validate_login, create_user


app = Flask(__name__)
@app.route('/login', methods=['POST']) #listens for post requests from "/login"
def login():
    email = request.args.get('email')
    password = request.args.get('password')

    status = validate_login(email, password)

    if status:
        session['user'] = email #keep track of who is logged in
        return jsonify({"status": "successful"})
    else:
        return jsonify({"status": "unsuccessful"})
    
    @app.route('/create_account', methods=['POST'])
    def create_account(): #listens for post requests from "/create_account"
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')

        if create_user(email, password):
            return jsonify({"status": "account created"})
        else:
            return jsonify({"status": "email already in use"})
    
    if __name__ == '__main__':
        app.run(host='localhost', port=5000)
