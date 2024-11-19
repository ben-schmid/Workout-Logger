from flask import Flask, request, jsonify
from user import User
from workout import Workout
from dotenv import load_dotenv
import os
from pymongo import MongoClient


app = Flask(__name__)

load_dotenv()
username = os.getenv("MONGO_USERNAME")
atlas_password = os.getenv("MONGO_PASSWORD")
dbname = "mydb"
connection = f'mongodb+srv://{username}:{atlas_password}@cluster0.x20eh.mongodb.net/{dbname}?retryWrites=true&w=majority&appName=Cluster0'

mongo_client = MongoClient(connection)
db = mongo_client[dbname]

@app.route('/api/login', methods=['POST']) #listens for post requests from "/api/login"
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    status = User.validate_login(email, password)

    if status:
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

@app.route('/api/quiz', methods=['POST'])
def handle_quiz():
    data = request.get_json()
    if not data or 'user_id' not in data or 'quizResults' not in data:
        return jsonify({"error": "Missing user_id or quizResults"}), 400
    
    user_id = data.get('user_id')
    quiz_results = data.get('quizResults')

    try:
        workout = Workout(user_id, db)
        routine_type = determine_routine_type(quiz_results)
        workout.generate_workout_plan(routine_type)
    except ValueError as e:
        print("Value Error")
        return jsonify({"error": str(e)}), 401

    except Exception as e:
        print("Error")
        return jsonify({"error": "An error occurred while generating the workout plan"}), 500
    #finally:
        #workout.close_connection()

    return jsonify({"status": "Workout plan generated based on quiz", "result": routine_type}), 200

def determine_routine_type(quiz_results):
    experience_level = quiz_results[5]
    primary_goal = quiz_results[4]
    training_days = quiz_results[6]

    if experience_level == 0:
        if training_days == 6:
            training_days = 5
        routine_type = f'fundamentals{training_days}x'
    
    else:
        if training_days == 3:
            training_days = 6
        elif training_days == 2:
            training_days = 5
        elif training_days == 1:
            training_days = 4
        else:
            training_days = 4
        if primary_goal == 0:
            routine_type = f'bodybuilding{training_days}x'  # Pure body building
        elif primary_goal == 1:
            routine_type = f'powerlifting{training_days}x'  # Power lifting
        elif primary_goal == 2:
            routine_type = f'ppl{training_days}x'  # Push Pull Legs (PPL)
        elif primary_goal == 3:
            routine_type = f'powerbuilding{training_days}x'  # Powerbuilding
        else:
            raise ValueError("Invalid primary goal value")

    return routine_type

if __name__ == "__main__":
    app.run(debug=True)