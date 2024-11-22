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

    def get_workouts(self):
        try:
            print(f"Fetching workout plan for user_id={self.user_id}")
            result = self.workouts_collection.find({"user_id": self.user_id}, {"routine_type": 1, "_id": 0})
            workouts = []
            for  workout in result:
                if workout['routine_type'] == 'ppl4x':
                    workouts.append({"id": "ppl4x", "name": "PUSH PULL LEGS 4X"})
                elif workout['routine_type'] == 'ppl5x':
                    workouts.append({"id": "ppl5x", "name": "PUSH PULL LEGS 5X"})
                elif workout['routine_type'] == 'ppl6x':
                    workouts.append({"id": "ppl6x", "name": "PUSH PULL LEGS 6X"})
                else:
                    routine_type = workout["routine_type"]
                    formatted_name = routine_type[:-2] + " " + routine_type[-2:]
                    formatted_name = formatted_name.replace("_", " ").upper()  
                    workouts.append({"id": routine_type, "name": formatted_name})
            if workouts:
                print(f"Workouts found: {workouts}")
                return workouts
            else:
                print("No workouts found")
                return[]
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
    
    def delete_workout(self, routine_type): 
        try:
            print(f"Deleting workout for user_id={self.user_id}, routine_type={routine_type}")
            delete_result = self.workouts_collection.delete_one(
                {
                    "user_id": self.user_id,
                    "routine_type": routine_type
                }
            )
            if delete_result.deleted_count > 0:
                print("Workout deleted successfully")
            else:
                print("Error deleting workout")
        except PyMongoError as e:
            print(f"Error deleting workout in MongoDB: {e}")
