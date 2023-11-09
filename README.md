# Diamond-Price-Modelling

# Diamond Analysis and EDA
This section provides an overview of the analysis and exploratory data analysis (EDA) performed on a dataset of diamond information. The analysis includes data preprocessing, visualization, and modelling preparation.


## Introduction
The aim of our project is to uncover relationships in the quality and features of gem diamonds and their impact on selling prices.  By doing so, we aim to create tools for selecting different feature options based on specified values or predicting estimated pricing.  This tool could then be used by sellers as a mechanism to entice customers.

The dataset used in this analysis was sourced from Kaggle, providing details on various attributes of diamonds, including their quality, characteristics, and pricing information. 

https://www.kaggle.com/datasets/hrokrin/the-largest-diamond-dataset-currely-on-kaggle/data
 

## Requirements
Before running the code, ensure you have the following libraries and modules installed:

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/695c2f9d-ed6f-4d0c-b611-8cbfb95ea264)
 
## Data Loading and Initial Inspection
The analysis begins with loading the dataset and performing an initial inspection. The dataset is loaded using Pandas and the first few rows are displayed for a quick overview.

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/006d17d5-21a7-411e-9bfe-88caf1e2604c)

## Data Preprocessing
### Removing Rows with Zero Values
To ensure data quality, rows with zero values are removed from the dataset.  This reduced the rows from 219,702 to 213,670.

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/57afda98-4292-48a4-ac7e-4d570eee68c2)


### Review feature counts
We reviewed the counts by feature to assess the data distribution for machine learning.

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/12e9f9a9-65fc-4f70-8642-25e4432626d2)

### Remove rows based on outlier data
We also removed rows where the count quantities of some features were extremely low and would be hard for a model to learn.  

For example, cut_quality features of Good, Fair and Ideal had counts of 28, 5 and 1 respectively.  
![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/202f7912-0884-4586-9dc4-f8146447495d)

Other data rows removed were:

culet_condition features of Chipped (qty 18) and Abraded (qty 8), girdle_min features XTN and STN (quantities 290 and 24), and girdle_max features XTN and STN (quantities 33 and 12),fluor_intensity features of Unknown (qty 113) and Slight (qty 12) and finally polish features of Fair (qty 7) and Poor (qty 2)

This reduced our dataset to 213,134 rows.


### Data Binning and Grouping
Certain features are grouped or combined into new categories.  
This approach helps in addressing low counts for certain quality values and making the data more manageable and meaningful for analysis and modelling.  Feature logic was also taken into consideration to ensure the integrity of the feature was not negatively impacted. 

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/033d329b-fde4-4b42-825a-3a79055c0741)

Combinations are listed here:
Clarity of I1, I2 and I3 wre all combined as they are all measurements of levels of inclusions (flaws) within the diamond.  They had low counts (6717, 921, 84)
Fluor_color features of Green, White and Orange had counts of 54, 42 and 9 respectively were combined into an “Other” value.
Cut features of Cushion and Modified Cusion were combined into 1 value of "Cushion" (3914 and 515 counts) 
Symmetry features of Fair (319) and Poor (2) were combinned to an "Other" value
Culet_size features of L, SL, EL and VL to a combined value of "L/SL/EL/VL" (a total of 77 rows)
Fancy_color_dominant_color features of Purple, Gray, Blue, Chameleon, Red and Black were combined into an "Other" value with 181 total quantity.
Fancy_color_secondary_color features of Red, Gray, Blue, and Violetwere combined into and "Other" value with 44 total quantity,

### Checking Binned Value Counts
After binning the data, value counts are checked to verify the grouping process.

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/ffa3588c-49f3-439b-af40-614fea2a1d1e)


## Selecting Features for Modelling
Categorical and numerical features are separated, and the target variable is defined.

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/1d3e439a-2978-472b-8b22-f232e48f8ea4)
![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/5c7806f3-50f2-4db4-84ae-b3617cc8eba4)
![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/4dcffc1c-8bf8-48e8-abce-098d7ef42a06)


## Correlation Analysis
Pearson correlation and heatmap are used to analyse the relationships between numerical features.  

### Pearson correlation

We wanted to understand how strongly each numerical feature is related to the target variable “total_sales_price” and Pearson correlation is suitable for identifying linear relationships.

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/139c5680-5718-4f12-a5ea-c314ff931f84)

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/4ea8607b-72d0-4254-a6e6-b2e141ceb833)

### Heatmap

We then ran a heatmap to visualize the Pearson correlation, making it easier to identify and interpret relationships between the features.
![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/4e7d9481-d98a-43d1-89b8-fad860bc4cfc)

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/c126966f-2d70-4985-b438-1e8896d30ec5)

The strong positive correlation of 0.75 between carat weight and total sales price suggests that, in this dataset, higher carat weight diamonds tend to command higher prices.

This finding underscores the significance of carat weight as a key determinant of a diamond's value, potentially reflecting consumer preferences for larger, more substantial stones.

## Seaborn Pair Plot
A Seaborn pair plot was created to visualize relationships among the features.  Regression lines were added to the scatterplots for a better understanding of linear relationships.

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/d5a6f70e-8732-452f-8781-8e3ca1941bf5)

## Analysis of Variance (ANOVA)
We performed ANOVA as we wanted to investigate whether the different categories within the categorical features have a statistically significant impact on the target variable (total_sales_price).

This is a statistical method used to assess whether there are statistically significant differences between the means of two or more groups.

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/5885c5d1-fbc8-4042-8866-eb1e8cdb633a)

These results show that Cut, Cut quality, Color, Fancy color-dominant color and Fancy color intensity are significant categories in relation to the sales price (target variable).

## Machine Learning Models
Machine learning models are built to predict the total sales price of diamonds based on the features. 

Three models are considered: Extra Trees Regressor, Random Forest Regressor with one-hot encoding, and Random Forest Regressor with label encoding.

### 9.1 Extra Trees Regressor (One-Hot Encoding)
The categorical features are encoded using one-hot encoding for use with the Extra Trees Regressor.
![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/52169895-eb83-4390-98a9-d00af07336af)

Created the ExtraTreesRegressor model and fit the data.
![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/b0fff020-8c74-44a6-a15d-bdf5f648f05d)

Get feature importances and display the top 12 features.
![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/781a1d74-b0b8-4cf6-bd24-39a4966371ed)

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/d9037c77-215c-44fc-ad5c-70cc7a79f644)



### 9.2 Random Forest Regressor (One-Hot Encoding)
The categorical features are encoded using one-hot encoding for use with the Random Forest Regressor.

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/6394831b-f3d0-473c-b687-ded6bba992df)

Created the RandomForestRegressor model and fit the data.

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/12a12a79-8724-4fe0-bfc3-ac0066e2cafe)

Get feature importances and display the top 12 features.
![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/b35c808e-2345-4420-a69e-b6481135e251)

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/1787d67d-3085-4530-be24-1685f91a99e3)



### 9.3 Random Forest Regressor (Label Encoding)
The categorical features are encoded using label encoding for use with the Random Forest Regressor.
![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/6fc1b696-f302-44dd-bc19-d25e852ff2ee)

Combined the Label Encoded categorical features with the numerical features.
![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/8ca7b20f-2f1a-4e49-bcd0-0abf88b87f6a)

Created the RandomForestRegressor model and fit the data.
![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/5f1b0613-5377-4c8f-9bd6-c35f88adcb3b)

Get feature importances and display top 12.
![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/21faa5e3-0937-44c5-96b9-b5ecd3aafedf)

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/be06a45d-8c45-4db1-993b-0b2584f9531b)


The significant features in 9.1 Extra Trees and 9.2 Random Forest Regressor methods are similar, based on the same hot encoding of categorical features.
9.3 Random Forest Regressor using label-encoded categorical features has a different set of important features. 

Carat-weight had the highest importance by far in all 3 methods used, with the importance of other features dropping heavily in significance.


We considered the interpretability of the models and determined we are not interested in understanding how each category within a categorical variable impacts the total_sales_price (target variable) and therefore decided the model with label-encoding was more appropriate in this scenario.  
The increase in dimensionality using one-hot ended data on an already large dataset would impact model complexity, training time and performance.

## Feature Selection
In the process of preparing data for modeling, we performed feature selection to determine which attributes have the most significant impact on our models. We created three different DataFrames for testing within the model training phase:

1. **Top 11 Features (Label Encoded Random Forest Regressor Model Results):**
   - We selected the top 11 features based on the results of the Label Encoded Random Forest Regressor model. These features are believed to be highly influential in predicting diamond prices.

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/05267fc8-98ed-4cfb-83b6-7c7733da3e5f)

2. **6 Top Features (Random Forest Regressor Label Encoded Results):**
   - In this variant, we narrowed our focus to the top 6 features derived from the Random Forest Regressor Label Encoded results. We excluded measurement-related features to assess their impact on model training.

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/7ec18d1b-8add-42b1-8d4d-60f0722eb694)

3. **The "4 C's" DataFrame:**
   - This DataFrame comprises four essential attributes in the diamond classification known as the "4 C's" – Cut, Color, Clarity, and Carat weight. These attributes are often fundamental factors in diamond purchasing decisions.

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/38e5fa47-0e45-40cc-8133-a471a9824cb8)

These DataFrames represent different sets of features used in our analysis. The final dataset, including label-encoded categorical data and numerical data, is saved and exported to a CSV file for further modeling.

# Model Training for Diamond Price Prediction
This project focuses on training a machine learning model for predicting diamond sales prices using two different datasets. The first dataset includes the top 11 features, achieving an accuracy of 0.87, while the second dataset comprises the top 4 features, resulting in an accuracy of 0.82.

## Steps involved in Model Training for Diamond
1.	Setting up top 4 Features and Target
- We start by setting up the features and target variable for the diamond price prediction. The features include various attributes such as cut, color, clarity, and carat weight, while the target is the price of the diamond.

2.	Setting up top 11 Features and Target
- We start by setting up the features and target variable for the diamond price prediction. The features include various attributes such as cut, color, clarity, depth percent, table percent, meas length, meas width, meas depth, fancy color, fancy color intensity and carat weight, while the target is the price of the diamond.

### Building a Pipeline of Standard Scaler and Models
We create pipelines that standardise the data and include four different regression models: Linear Regression, Decision Tree, Random Forest, K-Nearest Neighbors, and the model with the best cross-validation score.

### Fitting Models on the Training Data
Train all selected models using the training data, each using either the top 11 or top 4 features dataset.

### Selecting the Model with the Best Cross-Validation Score
We calculate the mean of cross-validation scores for the models using the negative root mean square error as the evaluation metric. Based on the cross-validation scores, we identify the model with the best performance. This model will be selected for further evaluation and testing.

![Screenshot 2023-11-08 at 8 43 17 pm](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134599676/c0638ee7-3b18-4640-b0d3-375611a7f362)

![Screenshot 2023-11-08 at 8 43 37 pm](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134599676/8148e5db-70e7-4209-a143-6a4cd89fa328)

## Deep Learning Neural Network
We also utilized a deep learning neural network to demonstrate model optimization, training it over 100 epochs and achieving an R2 score of 0.82, we ultimately decided with Random Forest regression model.

The decision was driven by the need for a more interpretable and transparent approach. Although the neural network displayed strong predictive capabilities, its complexity made it challenging to provide meaningful insights into the model's decision-making process. In contrast, the Random Forest regression model offers transparency and interpretability, allowing us to gain a clearer understanding of the factors influencing predictions.


By choosing the Random Forest regression model, we aim to strike a balance between model performance and interpretability, ensuring that we can provide actionable insights based on the features that most impact our predictions. This decision aligns with our goal of not only achieving accurate predictions but also comprehending the underlying drivers of those predictions, ultimately leading to more informed decision-making.

<img width="548" alt="Screenshot 2023-11-09 at 10 54 21 am" src="https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134527987/4c2c7c0c-0a47-41fa-a54a-7ffad7069e11">

### Testing the Model with the Best Score on the Test Set
Random Forest appears to be the model with the best scoring on negative root mean square error. We proceed to test this model on a separate test set and evaluate its performance using various parameters and metrics.

![Screenshot 2023-11-08 at 8 44 06 pm](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134599676/10cb707e-4502-4fdc-ac40-f08856ca97bc)

# Web Page Designing and Diamond Price Prediction
This part of the process is focused on Web Page development, pass data from a web page, run it on a model and bring the result back to the page.

## Steps involved in this process
1. HTML is used to create the basic structure of the web page and CSS is used for the size, style and position of different elements
on the web page.
   ![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134993882/1df4a99e-7982-45dd-9523-09b24e9ef218)
   ![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134993882/e444f6a4-bcab-497f-84d6-d30204c98f52)

3. JavaScript is used for interactivity between different sections and elements of the web page.
   ![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134993882/95504674-05d0-49ac-8478-2b0d725022e5)

5. HTML form element dropdown is used to collect user input.

6. We needed a Web Server to handle HTTP requests and responses, so we used Python and Flask for this purpose. We also created an API endpoint on the server to which the web page can send data. This API endpoint processes the data and return the result.
   ![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134993882/5ed65e3e-9d4a-49dc-bdf2-a089a4e2b612)

8. We used a library called "Pickle" to load the pre-trained machine learning model on the server from local disk and the data is processed and transformed into required format before feeding it to the model. The model then process the data and make predictions.

9. We used JavaScript to send the data to the API endpoint from the web page and after the data is processed and the pridiction is made, the server formats the response and send the result back to the web page using HTTP response. JavaScript on the web page will receive the result and update the DOM (Document Object Model) to display the prediction on the page.
   ![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134993882/68e84314-cb7f-4c14-baee-c53fd11069a3)

## Authorship

Created and submitted as Group Project for Monash University Data Analytics Boot Camp (November 2023).

Data collated, cleaned and code written by:

•	Jancel Adiong
•	Sagar Bora
•	Helena Chen
•	Caroline Grant

## References

 * Diamond data:
  
   https://www.kaggle.com/datasets/hrokrin/the-largest-diamond-dataset-currely-on-kaggle/data
  
 * Diamond information

   https://www.brilliantearth.com
   
