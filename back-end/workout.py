from pymongo import MongoClient
from pymongo.errors import PyMongoError

class Workout:
    def __init__(self, user_id):
        self.user_id = user_id
        try:
            username = "ClarkBen1225"
            atlas_password = "Atlas1225"
            dbname = "mydb"
            connection = f'mongodb+srv://{username}:{atlas_password}@cluster0.x20eh.mongodb.net/{dbname}?retryWrites=true&w=majority&appName=Cluster0'
            self.client = MongoClient(connection) 
            self.db = self.client['mydb']
            self.workouts_collection = self.db['user_workouts']
        except Exception as e:
            print(f"Error connecting to MongoDB: {e}")


    def generate_workout_plan(self, quiz_results):
        days_per_week = quiz_results.get("days_per_week")
        experience_level = quiz_results.get("experience_level")
        goal = quiz_results.get("goal")

        workout_plan = {
            "user_id": self.user_id,
            "days": self._generate_days(experience_level, days_per_week, goal)
        }

        try:
            self.workouts_collection.insert_one(workout_plan)
        except PyMongoError as e:
            print(f"Error inserting workout plan: {e}")

        self.workouts_collection.insert_one(workout_plan)

    def _generate_days(self, experience_level, days_per_week, goal):
        if experience_level == "beginner":
            if days_per_week == 3:
                return self._beginner_workout_3_days()
            elif days_per_week == 4:
                return self._beginner_workout_4_days()
            elif days_per_week == 5:
                return self._beginner_workout_5_days()
        elif experience_level == "advanced":
            if goal == "power lifting":
                return self._power_lifting_workout(days_per_week)
            elif goal == "power building":
                return self._power_building_workout(days_per_week)
            elif goal == "hypertrophy focused with strength (ppl)":
                return self._hypertrophy_ppl_workout(days_per_week)
            elif goal == "pure body building":
                return self._pure_body_building_workout(days_per_week)
        return []
    
    def _beginner_workout_3_days(self):
        return [
            {"day": "Day 1: Full Body", "exercises": [
                {"name": "Squat", "sets": 4, "reps": "5", "weight": ""},
                {"name": "Bench Press", "sets": 4, "reps": "5", "weight": ""},
                {"name": "Lat Pulldown or Pull-Ups (Assisted if needed)", "sets": 3, "reps": "8-10", "weight": ""},
                {"name": "Dumbbell Lunges", "sets": 3, "reps": "10 per leg", "weight": ""},
                {"name": "Plank", "sets": 3, "reps": "30-60 seconds", "weight": ""}
            ]},
            {"day": "Day 2: Full Body", "exercises": [
                {"name": "Deadlift", "sets": 4, "reps": "5", "weight": ""},
                {"name": "Overhead Press", "sets": 4, "reps": "5", "weight": ""},
                {"name": "Dumbbell Row", "sets": 3, "reps": "10 per arm", "weight": ""},
                {"name": "Leg Press", "sets": 3, "reps": "10", "weight": ""},
                {"name": "Cable Crunch", "sets": 3, "reps": "12", "weight": ""}
            ]},
            {"day": "Day 3: Full Body", "exercises": [
                {"name": "Squat (light/moderate weight for technique)", "sets": 4, "reps": "5", "weight": ""},
                {"name": "Incline Dumbbell Bench Press", "sets": 3, "reps": "8", "weight": ""},
                {"name": "Seated Cable Row", "sets": 3, "reps": "10", "weight": ""},
                {"name": "Glute Bridge", "sets": 3, "reps": "12", "weight": ""},
                {"name": "Calf Raises", "sets": 4, "reps": "15", "weight": ""}
            ]}
        ]

    def _beginner_workout_4_days(self):
        return [
            {"day": "Day 1: Upper Body", "exercises": [
                {"name": "Bench Press", "sets": 4, "reps": "5", "weight": ""},
                {"name": "Overhead Press", "sets": 3, "reps": "8", "weight": ""},
                {"name": "Lat Pulldown", "sets": 3, "reps": "10", "weight": ""},
                {"name": "Dumbbell Curl", "sets": 3, "reps": "12", "weight": ""},
                {"name": "Tricep Rope Pushdown", "sets": 3, "reps": "12", "weight": ""}
            ]},
            {"day": "Day 2: Lower Body", "exercises": [
                {"name": "Squat", "sets": 4, "reps": "5", "weight": ""},
                {"name": "Deadlift", "sets": 3, "reps": "5", "weight": ""},
                {"name": "Lunges", "sets": 3, "reps": "10 per leg", "weight": ""},
                {"name": "Leg Curl Machine", "sets": 3, "reps": "12", "weight": ""},
                {"name": "Calf Raises", "sets": 4, "reps": "15", "weight": ""}
            ]},
            {"day": "Day 3: Upper Body", "exercises": [
                {"name": "Incline Dumbbell Press", "sets": 3, "reps": "8", "weight": ""},
                {"name": "Dumbbell Row", "sets": 3, "reps": "10 per arm", "weight": ""},
                {"name": "Seated Cable Row", "sets": 3, "reps": "10", "weight": ""},
                {"name": "Dumbbell Lateral Raises", "sets": 3, "reps": "12", "weight": ""},
                {"name": "Bicep Curl (Barbell or Dumbbell)", "sets": 3, "reps": "10", "weight": ""}
            ]},
            {"day": "Day 4: Lower Body", "exercises": [
                {"name": "Front Squat or Goblet Squat", "sets": 3, "reps": "8", "weight": ""},
                {"name": "Romanian Deadlift", "sets": 3, "reps": "8", "weight": ""},
                {"name": "Leg Press", "sets": 3, "reps": "12", "weight": ""},
                {"name": "Glute Bridges", "sets": 3, "reps": "12", "weight": ""},
                {"name": "Plank", "sets": 3, "reps": "30-60 seconds", "weight": ""}
            ]}
        ]

    def _beginner_workout_5_days(self):
        return [
            {"day": "Day 1: Chest", "exercises": [
                {"name": "Bench Press", "sets": 4, "reps": "5", "weight": ""},
                {"name": "Incline Dumbbell Press", "sets": 3, "reps": "8", "weight": ""},
                {"name": "Dumbbell Flys", "sets": 3, "reps": "12", "weight": ""},
                {"name": "Push-Ups", "sets": 3, "reps": "to failure", "weight": ""}
            ]},
            {"day": "Day 2: Back", "exercises": [
                {"name": "Deadlift", "sets": 4, "reps": "5", "weight": ""},
                {"name": "Lat Pulldown or Pull-Ups", "sets": 3, "reps": "10", "weight": ""},
                {"name": "Seated Cable Row", "sets": 3, "reps": "10", "weight": ""},
                {"name": "Face Pulls", "sets": 3, "reps": "12", "weight": ""}
            ]},
            {"day": "Day 3: Shoulders", "exercises": [
                {"name": "Overhead Press", "sets": 4, "reps": "5", "weight": ""},
                {"name": "Dumbbell Lateral Raises", "sets": 3, "reps": "12", "weight": ""},
                {"name": "Face Pulls", "sets": 3, "reps": "15", "weight": ""},
                {"name": "Rear Delt Flys", "sets": 3, "reps": "15", "weight": ""}
            ]},
            {"day": "Day 4: Legs", "exercises": [
                {"name": "Squat", "sets": 4, "reps": "5", "weight": ""},
                {"name": "Leg Press", "sets": 3, "reps": "10", "weight": ""},
                {"name": "Lunges", "sets": 3, "reps": "10 per leg", "weight": ""},
                {"name": "Calf Raises", "sets": 4, "reps": "15", "weight": ""},
                {"name": "Hanging Leg Raise", "sets": 3, "reps": "12", "weight": ""}
            ]},
            {"day": "Day 5: Arms", "exercises": [
                {"name": "Barbell Curl", "sets": 3, "reps": "10", "weight": ""},
                {"name": "Tricep Rope Pushdown", "sets": 3, "reps": "12", "weight": ""},
                {"name": "Hammer Curls", "sets": 3, "reps": "12", "weight": ""},
                {"name": "Skull Crushers", "sets": 3, "reps": "10", "weight": ""},
                {"name": "Preacher Curl", "sets": 3, "reps": "12", "weight": ""}
            ]}
        ]
    
    def _power_lifting_workout(self, days_per_week):
        return []
    
    def _power_building_workout(self, days_per_week):
        return []
    
    def _hypertrophy_ppl_workout(self, days_per_week):
        return []
    
    def _pure_body_building_workout(self, days_per_week):
        return []

    def get_workout_plan(self):
        return self.workouts_collection.find_one({"user_id": self.user_id})
    
    def add_exercise(self, day, exercise):
        self.workouts_collection.update_one(
            {"user_id": self.user_id, "days.day": day},
            {"$push": {"days.$.exercises": exercise}}
        )
    
    def delete_exercise(self, day, exercise):
        self.workouts_collection.update_one(
            {"user_id": self.user_id, "days.day": day},
            {"$pull": {"days.$.exercises": exercise}}
        )

    def update_weight(self, day, exercise, new_weight):
        self.workouts_collection.update_one(
            {"user_id": self.user_id, "days.day": day, "days.exercises.name": exercise},
            {"$set": {"days.$.exercises.$[exercise].weight": new_weight}},
            array_filters=[{"exercise.name": exercise}]
        )