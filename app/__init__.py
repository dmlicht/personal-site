from flask import Flask

application = Flask(__name__)
app = application
app.config.from_object('config')
from app import views
