from flask import Flask
from flask import request
from flask_cors import CORS
import Bechdel_Test_CLEANED

app = Flask('__bechdel_test__')
CORS(app)

@app.route('/', methods = ['POST'])
def run_bechdel_test():

    print('hi')

    requests = []
    requests.append(request)
    print("requests", requests)

    text = request.data.decode('UTF-8')

    passed = Bechdel_Test_CLEANED.combined_bechdel_test(text)
    print("passed:", passed)
    return(str(passed))
