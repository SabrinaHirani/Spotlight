from flask import Flask
from flask import request
from flask_cors import CORS

import Bechdel_Test

app = Flask('__main__')
CORS(app)

@app.route('/', methods = ['POST'])
def run_bechdel_test():

    text = request.data.decode('UTF-8')

    passed = Bechdel_Test.combined_bechdel_test(text)
    return(str(passed))
