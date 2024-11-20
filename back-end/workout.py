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
                "routine_type": routine_type
            }
            
            print("Attempting to insert workout plan into the database.")
            insert_result = self.workouts_collection.insert_one(workout_plan)
            if insert_result.acknowledged:
                print(f"Workout plan for '{routine_type}' created successfully with ID {insert_result.inserted_id}.")
                print(f"Inserted workout plan: {workout_plan}")
                print(f"All records in the collection after insert: {list(self.workouts_collection.find())}")
            else:
                print(f"Workout plan insertion not acknowledged by MongoDB.")
            return workout_plan

        except PyMongoError as e:
            print(f"Error creating workout plan in MongoDB: {e}")
            return None
        
    def load_weights(self, routine_type):
        try:
            print(f'loading weight for user_id={self.user_id}, routine_type={routine_type}')
            workout = self.workouts_collection.find_one({'user_id': self.user_id, 'routine_type': routine_type})
            if not workout:
                return []
            result = []
            exercises = workout.get('exercises', [])
            for exercise in exercises:
                result.append({'exercise': exercise['name'], 'weight': exercise['weight']})
            return result
        except PyMongoError as e:
            print(f'error loading weights: {e}')
            return []


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
                }
            )

            if update_result.modified_count > 0:
                print("Weight updated successfully")
            else:
                add_result = self.workouts_collection.update_one(
                    {
                        "user_id": self.user_id,
                        "routine_type": routine_type
                    },
                    {
                        "$push": {"exercises": {"name": exercise, "weight": weight}}
                    }
                )

                if add_result.modified_count > 0:
                    print("New exercise added successfully")
                else:
                    print("Error adding the new exercise")
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

