# Diamond-Price-Modelling

##Diamond Analysis and EDA
This document provides an overview of the analysis and exploratory data analysis (EDA) performed on a dataset of diamond information. The analysis includes data preprocessing, visualization, and modelling preparation.


## Introduction
The aim of our project is to uncover relationships in the quality and features of diamonds and their impact on selling prices.  By doing so, we aim to create tools for selecting different feature options based on specified values or predicting estimated pricing.  This tool could then be used by sellers as a mechanism to entice customers.

The dataset used in this analysis was sourced from Kaggle, providing details on various attributes of diamonds, including their quality, characteristics, and pricing information. 

https://www.kaggle.com/datasets/hrokrin/the-largest-diamond-dataset-currely-on-kaggle/data


This document presents an analysis and exploratory data analysis (EDA) of a dataset focusing on understanding the relationships between various features and preparing the data for predictive modelling. 

## Requirements
Before running the code, ensure you have the following libraries and modules installed:
 
## Data Loading and Initial Inspection
The analysis begins with loading the dataset and performing an initial inspection. The dataset is loaded using Pandas and the first few rows are displayed for a quick overview.

## Data Preprocessing
### Removing Rows with Zero Values
To ensure data quality, rows with zero values are removed from the dataset.  This reduced the rows from 219,702 to 213,670.

### Review feature counts
We reviewed the counts by feature to assess the data distribution for machine learning.

### Remove rows based on outlier data
We also removed rows where the count quantities of some features were so low.

For example, cut_quality features of Good, Fair and Ideal had counts of 28, 5 and 1 respectively.  

### Data Binning and Grouping
Certain features are grouped or combined into new categories.  
This approach helps in addressing low counts for certain quality values and making the data more manageable and meaningful for analysis and modelling.

For example, fluor_color features of Green, White and Orange had counts of 54, 42 and 9 respectively were combined into an “Other” value.

### Checking Binned Value Counts
After binning the data, value counts are checked to verify the grouping process.

## Selecting Features for Modelling
Categorical and numerical features are separated, and the target variable is defined.

## Correlation Analysis
Pearson correlation and Seaborn heatmap are used to analyse the relationships between numerical features.  

### Pearson correlation
We wanted to understand how strongly each numerical feature is related to the target variable “total_sales_price” and Pearson correlation is suitable for identifying linear relationships

### Heatmap
We then ran a heatmap to visualize the Pearson correlation, making it easier to identify and interpret relationships between the features.

The strong positive correlation of 0.75 between carat weight and total sales price suggests that, in this dataset, larger diamonds tend to command higher prices.

This finding underscores the significance of carat weight as a key determinant of a diamond's value, potentially reflecting consumer preferences for larger, more substantial stones.

## Seaborn Pair Plot
A Seaborn pair plot was created to visualize relationships among the features

## Analysis of Variance (ANOVA)
We performed ANOVA as we wanted to investigate whether the different categories within the categorical features have a statistically significant impact on the target variable (total_sales_price).

This is a statistical method used to assess whether there are statistically significant differences between the means of two or more groups.

These results show that Cut, Cut quality, Color, Fancy color-dominant color and Fancy color intensity are significant categories in relation to the sales price (target variable).

## Machine Learning Models
Machine learning models are built to predict the total sales price of diamonds based on the features. 

Three models are considered: Extra Trees Regressor, Random Forest Regressor with one-hot encoding, and Random Forest Regressor with label encoding.

### 9.1 Extra Trees Regressor (One-Hot Encoding)
The categorical features are encoded using one-hot encoding for use with the Extra Trees Regressor.

Created the ExtraTreesRegressor model and fit the data.

Get feature importances and display the top 12 features.

### 9.2 Random Forest Regressor (One-Hot Encoding)
The categorical features are encoded using one-hot encoding for use with the Random Forest Regressor.

Created the RandomForestRegressor model and fit the data.

Get feature importances and display the top 12 features.

### 9.3 Random Forest Regressor (Label Encoding)
The categorical features are encoded using label encoding for use with the Random Forest Regressor.

Combined the Label Encoded categorical features with the numerical features.

Created the RandomForestRegressor model and fit the data.

Get feature importances and display top 12.

The significant features in 9.1 Extra Trees and 9.2 Random Forest Regressor methods are similar, based on the same hot encoding of categorical features.
9.3 Random Forest Regressor using label-encoded categorical features has a different set of important features. 

Carat-weight had the highest importance by far in all 3 methods used, with the importance of other features dropping heavily in significance.


We considered the interpretability of the models and determined we are not interested in understanding how each category within a categorical variable impacts the total_sales_price (target variable) and therefore decided the model with label-encoding was more appropriate in this scenario.  
The increase in dimensionality using one-hot ended data on an already large dataset would impact model complexity, training time and performance.

## Feature Selection
The analysis concludes by creating a new DataFrame for modelling.  
We kept the top 11 features from the Label encoded Random Forest regressor model results.  
The final dataset (label encoded categorical data + numerical data) is saved and exported to csv.

## Conclusion
This document provides an overview of the analysis and EDA performed on the diamond dataset.
It covers data preprocessing, visualization, and modelling preparation. 
The analysis is a crucial step in understanding the dataset and preparing it for predictive modelling.
The results can be used to build predictive models to estimate the total sales price of diamonds.

## Authors;
•	Jancel Adiong
•	Sagar Bora
•	Helena Chen
•	Caroline Grant
