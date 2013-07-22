from app import app
from flask import render_template


pages = ['about', 'resume', 'projects', 'blog']

def render(page_to_render):
    return render_template(page_to_render + '.html', pages=pages, current_page=page_to_render)

@app.route('/')
@app.route('/index')
@app.route('/about')
def index():
    return render('about')

@app.route('/resume')
def resume():
    return render('resume')

@app.route('/projects')
def projects():
    return render('projects')

@app.route('/blog')
def blog():
    return render('blog')
