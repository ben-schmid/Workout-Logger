from pymongo import MongoClient
# import bcrypt
import re

class User:
    def __init__(self, email, password, name):

        self.email = email
        self.password = password
        self.name = name
        # try:
        #     self.client = MongoClient('localhost', 27017) #27017 is default port number for MongoDB
        # except Exception as e:
        #     print(f"Error connecting to MongoDB: {e}")
        # self.db = self.client['user_db']
        # self.users_collection = self.db['user_accounts']

    @staticmethod
    def validate_login(email, password):
        if email == "test@urmom.com" and password == "123456":
            return True 
        return False

        
        
    # def is_valid_email(email):
    #     return re.match(r"[^@]+@[^@]+\.[^@]+", email)
    
   

#         user = self.users_collection.find_one({"email": email})
#         if user and bcrypt.checkpw(password.encode('utf-8'), user['password']):
#             return True
#         else:
#             return False
        
#     def create_user(self, email, password, name):
#         if not self.is_valid_email(email):
#             return False
#         if self.users_collection.find_one({"email": email}): #Checks if user email already used
#             return False
        
#         hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()) #Encrypt password 

#         self.users_collection.insert_one({"email": email, "password": hashed_password, "name": name}) #Add new user to DB
#         return True
    
# user_handler = User()
