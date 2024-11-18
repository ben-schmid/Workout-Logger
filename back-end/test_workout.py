import unittest
from pymongo import MongoClient
from workout import Workout
from dotenv import load_dotenv
import os

class TestWorkout(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        # Load environment variables for DB connection
        load_dotenv()
        username = os.getenv("MONGO_USERNAME")
        atlas_password = os.getenv("MONGO_PASSWORD")
        dbname = "mydb"
        connection = f'mongodb+srv://{username}:{atlas_password}@cluster0.x20eh.mongodb.net/{dbname}?retryWrites=true&w=majority&appName=Cluster0'
        cls.client = MongoClient(connection)
        cls.db = cls.client[dbname]
        cls.workouts_collection = cls.db['user_workouts']

    def setUp(self):
        # Clean up the collection to make sure we have a clean slate for each test
        self.workouts_collection.delete_many({})

    def test_generate_workout_plan(self):
        # Create a Workout instance with a test user_id
        user_id = "test_user_id"
        routine_type = "ppl4x"
        workout = Workout(user_id, self.db)

        # Generate workout plan
        workout.generate_workout_plan(routine_type)

        # Verify the workout plan was created successfully in the DB
        db_entry = self.workouts_collection.find_one({"user_id": user_id, "routine_type": routine_type})
        self.assertIsNotNone(db_entry, "Workout plan was not found in the database")
        self.assertEqual(db_entry["routine_type"], routine_type, "Routine type does not match the expected value")

    def tearDown(self):
        # Clean up any test data
        self.workouts_collection.delete_many({})

    @classmethod
    def tearDownClass(cls):
        # Close the database connection after all tests have been run
        cls.client.close()

if __name__ == '__main__':
    unittest.main()
