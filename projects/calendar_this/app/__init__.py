from app import routes
from flask import Flask
import os

app = Flask(__name__)


app.config.update({'SECRET_KEY': os.environ.get('SECRET_KEY')})
# app.config.update({'FLASK_ENV': os.environ.get('FLASK_ENV')})
secretKey = os.environ.get('SECRET_KEY')
app.register_blueprint(routes.bp)
