import firebase_admin
from firebase_admin import credentials

# Fetch the service account key from the JSON file
cred = credentials.Certificate("serviceAccountKey.json")

# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
  'databaseURL': 'https://collikium-default-rtdb.firebaseio.com/'
})


