from flask import Flask, request, jsonify
from user import User
from workout import Workout
from dotenv import load_dotenv
import os
from pymongo import MongoClient
from pymongo.errors import PyMongoError
import certifi

app = Flask(__name__)

load_dotenv()
username = os.getenv("MONGO_USERNAME")
atlas_password = os.getenv("MONGO_PASSWORD")
dbname = "mydb"
connection = f'mongodb+srv://{username}:{atlas_password}@cluster0.x20eh.mongodb.net/{dbname}?retryWrites=true&w=majority&appName=Cluster0'

mongo_client = MongoClient(connection, tlsCAFile=certifi.where())
db = mongo_client[dbname]

@app.route('/api/login', methods=['POST']) #listens for post requests from "/api/login"
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    status = User.validate_login(email, password)

    if status:
        return jsonify({"status": "successful", "email": email}), 201
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
    user_id = data.get('user_id')
    quiz_results = data.get('quizResults')

    try:
        workout = Workout(user_id, db)
        routine_type = determine_routine_type(quiz_results)
        print(routine_type)
        workout.generate_workout_plan(routine_type)

    except Exception as e:
        print
        return jsonify({"error": "An error occurred while generating the workout plan"}), 500


    return jsonify({"status": "success", "result": routine_type}), 200

def determine_routine_type(quiz_results):
    experience_level = quiz_results[5]
    primary_goal = quiz_results[4]
    training_days = quiz_results[6] + 3
    print(f'training_days: {training_days}')

    routine_type = ''

    if experience_level == 0:
        if training_days == 6:
            training_days = 5
        routine_type = f'fundamentals{training_days}x'
    
    if primary_goal == 0:
        routine_type = f'bodybuilding{training_days}x'  # Pure body building
    elif primary_goal == 1:
        routine_type = f'powerlifting{training_days}x'  # Power lifting
    elif primary_goal == 2:
        routine_type = f'ppl{training_days}x'  # Push Pull Legs (PPL)
    else:
        routine_type = f'powerbuilding{training_days}x'  # Powerbuilding
        
    return routine_type


@app.route('/api/loadworkouts', methods=['GET'])
def send_workouts():
    user_id = request.args.get('user_id')
    try:
        workout = Workout(user_id, db)
        workouts = workout.get_workouts()

        if workouts is None:
            print('error workouts is None')
            return jsonify({"error": "Failed to retrieve workouts"}), 500
        return jsonify(workouts), 200
    except PyMongoError as e:
        print(f"Error retrieving workouts: {e}")
        return None

@app.route('/api/weights', methods=['POST'])
def update_weight():
    data = request.get_json()
    user_id = data['user_id']
    routine_type = data['routineType']
    exercise = data['exercise']
    weight = data['weight']

    try:
        workout = Workout(user_id, db)
        workout.update_weight(routine_type, exercise, weight)
    except PyMongoError as e:
        return jsonify({"error": f"Failed to update weight: {str(e)}"}), 500
    
    return jsonify({"status": "Weight updated successfully"}), 200

@app.route('/api/loadweights', methods=['GET'])
def send_weights():
    user_id = request.args.get('user_id')
    routine_type = request.args.get('routineType')

    try:
        workout = Workout(user_id, db)
        result = workout.load_weights(routine_type)
        print(f'result: {result}')
        return jsonify(result), 200
    except PyMongoError as e:
        print(f'error: {e}')
        return 'error loading weights', 500
    
@app.route('/api/deleteworkout', methods=['DELETE'])
def delete_workout():
    user_id = request.args.get('user_id')
    routine_type = request.args.get('routineType')

    try:
        workout = Workout(user_id, db)
        workout.delete_workout(routine_type)
    except PyMongoError as e:
        return jsonify({"error": f"Failed to delete workout: {str(e)}"}), 500

    return jsonify({"status": "Workout deleted successfully"}), 200

  

if __name__ == "__main__":
    app.run(debug=True)