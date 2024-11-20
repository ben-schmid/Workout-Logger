from pymongo import MongoClient
from pymongo.errors import PyMongoError
from dotenv import load_dotenv
import os

class Workout:
    def __init__(self, user_id, db):
        self.user_id = user_id
        self.db = db
        self.workouts_collection = self.db['user_workouts']
        print("Connection established")

    def get_workout_plan(self, routine_type):
        try:
            print(f"Fetching workout plan for user_id={self.user_id}, routine_type={routine_type}")
            return self.workouts_collection.find_one({"user_id": self.user_id, "routine_type": routine_type})
        except PyMongoError as e:
            print(f"Error reteriving workout plan from MongoDB: {e}")
            return None
        

    def generate_workout_plan(self, routine_type):
        try:
            print(f"Generating workout plan for user_id={self.user_id}, routine_type={routine_type}")
            existing_plan = self.workouts_collection.find_one(
                {"user_id": self.user_id, "routine_type": routine_type}
            )
            if existing_plan:
                print("Workout plan already exists.")
                return existing_plan

            workout_plan = {
                "user_id": self.user_id,
                "routine_type": routine_type,
                "exercises": [
                    {"name": "Squat", "weight": ""},
                    {"name": "Bench Press", "weight": ""},
                    {"name": "Deadlift", "weight": ""},
                    {"name": "Seated Cable Row", "weight": ""},
                    {"name": "Dumbbell Shoulder Press", "weight": ""},
                    {"name": "Dumbbell Incline Press", "weight": ""},
                    {"name": "Lat Pulldown", "weight": ""},
                    {"name": "Barbell Curl", "weight": ""},
                    {"name": "Skull Crushers", "weight": ""},
                    {"name": "Leg Press", "weight": ""},
                    {"name": "Romanian Deadlifts", "weight": ""},
                    {"name": "Hamstring Curls", "weight": ""},
                    {"name": "Leg Extensions", "weight": ""},
                    {"name": "Calf Raises", "weight": ""},
                    {"name": "T-Bar Row", "weight": ""},
                    {"name": "Cable Lateral Raises", "weight": ""},
                    {"name": "Pec Deck Machine", "weight": ""},
                    {"name": "Dumbbell Pullover", "weight": ""},
                    {"name": "Dumbbell Hammer Curls", "weight": ""},
                    {"name": "Tricep Rope Pushdown", "weight": ""},
                    {"name": "Leg Curl Machine", "weight": ""},
                    {"name": "Bulgarian Split Squats", "weight": ""},
                    {"name": "Lateral Raises", "weight": ""},
                    {"name": "Barbell Row", "weight": ""},
                    {"name": "Face Pulls", "weight": ""},
                    {"name": "Dumbbell Curls", "weight": ""},
                    {"name": "Dumbbell Bench Press", "weight": ""},
                    {"name": "Seated Shoulder Press Machine", "weight": ""},
                    {"name": "Cable Flys", "weight": ""},
                    {"name": "Dumbbell Lateral Raises", "weight": ""},
                    {"name": "Hammer Curls", "weight": ""},
                    {"name": "Dumbbell Lunges", "weight": ""},
                    {"name": "Overhead Press", "weight": ""},
                    {"name": "Dumbbell Row", "weight": ""},
                    {"name": "Cable Crunch", "weight": ""},
                    {"name": "Incline Dumbbell Bench Press", "weight": ""},
                    {"name": "Dumbbell Flys", "weight": ""},
                    {"name": "Rear Delt Flys", "weight": ""},
                    {"name": "Close Grip Bench Press", "weight": ""},
                    {"name": "Tricep Dips (Weighted if possible)", "weight": ""},
                    {"name": "Pull-Ups (Weighted if possible)", "weight": ""},
                    {"name": "Seated Dumbbell Shoulder Press", "weight": ""},
                    {"name": "Preacher Curl", "weight": ""},
                    {"name": "Pause Squat", "weight": ""}
                ]
            }
            
            print("Attempting to insert workout plan into the database.")
            insert_result = self.workouts_collection.insert_one(workout_plan)
            if insert_result.acknowledged:
                print(f"Workout plan for '{routine_type}' created successfully with ID {insert_result.inserted_id}.")
            else:
                print(f"Workout plan insertion not acknowledged by MongoDB.")
            return workout_plan

        except PyMongoError as e:
            print(f"Error creating workout plan in MongoDB: {e}")
            return None
    

    def update_weight(self, routine_type, exercise, weight):
        try:
            print(f"Updating weight for user_id={self.user_id}, routine_type={routine_type}, exercise={exercise}, weight={weight}")

            update_result = self.workouts_collection.update_one(
                {
                    "user_id": self.user_id,
                    "routine_type": routine_type,
                    "exercises.name": exercise
                },
                {
                    "$set": {"exercises.$.weight": weight}
                },
            )
            if update_result.modified_count > 0:
                print("Weight updated successfully")
            else:
                print("Error updating the weight")
        except PyMongoError as e:
            print(f"Error updating weight for exercise in MongoDB: {e}")

    # def add_or_update_weight(self, routine_type, exercise, weight):
    #     try:
    #         self.workouts_collection.update_one(
    #             {"user_id": self.user_id, "routine_type": routine_type, "days.exercises.name": exercise},
    #             {
    #                 "$set": {"days.$.exercises.$[exercise].weight": weight},
    #                 "$setOnInsert": {"days": [{"day": "Day 1", "exercises": [{"name": exercise, "weight": weight, "sets": "", "reps": ""}]}]}
    #             },
    #             array_filters=[{"exercise.name": exercise}],
    #             upsert=True
    #         )
    #     except PyMongoError as e:
    #         print(f"Error adding or updating weight in MongoDB: {e}")
    

    # def add_exercise(self, day, exercise):
    #     try:
    #         self.workouts_collection.update_one(
    #             {"user_id": self.user_id, "days.day": day},
    #             {"$push": {"days.$.exercises": exercise}}
    #         )
    #     except PyMongoError as e:
    #         print(f"Error adding exercise to MongoDB: {e}")
    

    # def get_exercise_by_routine_type(self, routine_type):
    #     try:
    #         workout_plan = self.get_workout_plan(routine_type)
    #         if workout_plan:
    #             exercises = []
    #             for day in workout_plan.get("days", []):
    #                 exercises.extend(day.get("exercises", []))
    #             return exercises
    #         return[]
    #     except PyMongoError as e:
    #         print(f"Error retrieving exercises from MongoDB: {e}")
    #         return []


    # def delete_exercise(self, day, exercise):
    #     try:
    #         self.workouts_collection.update_one(
    #             {"user_id": self.user_id, "days.day": day},
    #             {"$pull": {"days.$.exercises": exercise}}
    #         )
    #     except PyMongoError as e:
    #         print(f"Error deleting exercise from MongoDB: {e}")

