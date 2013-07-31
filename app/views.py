from app import app
from flask import render_template
from skills import skills

pages = ['intro', 'projects', 'skills']

def render(page_to_render):
    return render_template(page_to_render + '.html', pages=pages, current_page=page_to_render, skills=skills)

@app.route('/')
@app.route('/index')
def index():
    return render('base')

@app.route('/blog')
def blog():
    return render('blog')
