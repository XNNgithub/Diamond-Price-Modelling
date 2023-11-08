# Import dependencies
from flask import Flask, request, jsonify, render_template_string, url_for
import pandas as pd
import pickle

app = Flask(__name__)

# Set the flask api route
@app.route('/process', methods=['GET','POST'])
def process():
    # Read the data passed to the api
    cut = int(request.args.get('dropdown1')[0:1])
    color = int(request.args.get('dropdown2')[0:1])
    clarity = int(request.args.get('dropdown3')[0:1])
    carat_weight = request.args.get('dropdown4')
    
    # Set file name and location of the model
    filename = '../model/finalized_model_topfeatures4.sav'

    # Load the model from disk
    loaded_model = pickle.load(open(filename, 'rb'))

    # Create a dataframe with required input 
    input_df = pd.DataFrame({
        "carat_weight" : [carat_weight],
        "cut" : [cut],
        "color" : [color],
        "clarity" : [clarity]
        })

    # Pass the DataFrame to the model to predict the price
    predicted_price  =loaded_model.predict(input_df)

    # Text to display on the html page
    concatenated_text = f"The estimated price of Diamond is ${format(int(predicted_price[0]), ',')}"
    return f'displayResult({{"concatenated_text": "{concatenated_text}"}});'

if __name__ == '__main__':
    app.run(debug=True)