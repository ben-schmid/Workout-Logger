from pymongo import MongoClient
import bcrypt
import re

class User:
    def __init__(self, email, password, name):
        self.email = email
        self.password = password
        self.name = name
        try:
            self.client = MongoClient('localhost', 27017) #27017 is default port number for MongoDB
            self.db = self.client['mydb']
            self.users_collection = self.db['user_accounts']
        except Exception as e:
            print(f"Error connecting to MongoDB: {e}")

    @staticmethod
    def validate_login(email, password):
        try:
            client = MongoClient('localhost', 27017)
            db = client['mydb']
            users_collection = db['user_accounts']
            user = users_collection.find_one({"email": email})
            if user and bcrypt.checkpw(password.encode('utf-8'), user['password']):
                return True
        except Exception as e:
            print(f"Error during login validation: {e}")
        return False

        
    @staticmethod    
    def is_valid_email(email):
        return re.match(r"[^@]+@[^@]+\.[^@]+", email)
        
    def create_user(self):
        if not User.is_valid_email(self.email):
            return False
       
        if self.users_collection.find_one({"email": self.email}): #Checks if user email already used
            return False
        
        hashed_password = bcrypt.hashpw(self.password.encode('utf-8'), bcrypt.gensalt()) #Encrypt password 

        self.users_collection.insert_one({"email": self.email, "password": hashed_password, "name": self.name}) #Add new user to DB
        print("user created successfully")
        return True
    
user_handler = User("test@example.com", "testpassword", "Test User")
