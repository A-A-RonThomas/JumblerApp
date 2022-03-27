from flask import Flask, render_template, url_for

app = Flask(__name__)

# @app.route('/')
# def hello():
#     return 'Hello, World\n'

@app.route('/main/')
def main():
    pass

@app.route('/')
def BYO():
    return render_template('DIY.html', title="DIY")

@app.route('/LevelOne/')
def L1():
    return render_template('Level1.html', title="Level 1")