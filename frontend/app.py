from flask import Flask, render_template
import requests

app = Flask(__name__)

BACKEND_URL = "http://backend:5000/api/data"

@app.route("/")
def home():
    try:
        response = requests.get(BACKEND_URL).json()
        message = response.get("message", "No response from backend")
    except:
        message = "Backend not reachable"

    return render_template("index.html", backend_message=message)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
