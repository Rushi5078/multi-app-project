from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to Python Frontend!"

@app.route('/call-backend')
def call_backend():
    res = requests.get("http://backend:5000/api")
    return jsonify({"backend_reply": res.json()})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
