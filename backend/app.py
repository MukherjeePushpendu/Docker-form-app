from flask import Flask, request, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Flask Backend Running!"

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form.get("name")
    email = request.form.get("email")
    print("Form Received:", request.form)
    return render_template("result.html", name=name, email=email)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
