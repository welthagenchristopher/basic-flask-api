# basic-flask-api
Super, super basic API to act as an access point for a web store.

Really just to show what the basic framework is to get a Flask
app up and running.


All local - please don't host this on the wider net 
without learning and implementing some basic security.

The file structure is important, what its at now is what
the Flask library recognises (HTML files in 'templates',
CSS, JS, and any database related files in 'static'.

This can be changed, but the name and path will need to be
indicated when the flask app is initiated with:

  myWebApp = Flask(__name__, template_folder=#path)


