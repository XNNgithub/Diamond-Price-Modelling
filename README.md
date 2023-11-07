# Diamond-Price-Modelling

## Diamond Analysis and EDA
This document provides an overview of the analysis and exploratory data analysis (EDA) performed on a dataset of diamond information. The analysis includes data preprocessing, visualization, and modelling preparation.


## Introduction
The aim of our project is to uncover relationships in the quality and features of diamonds and their impact on selling prices.  By doing so, we aim to create tools for selecting different feature options based on specified values or predicting estimated pricing.  This tool could then be used by sellers as a mechanism to entice customers.

The dataset used in this analysis was sourced from Kaggle, providing details on various attributes of diamonds, including their quality, characteristics, and pricing information. 

https://www.kaggle.com/datasets/hrokrin/the-largest-diamond-dataset-currely-on-kaggle/data


This document presents an analysis and exploratory data analysis (EDA) of a dataset focusing on understanding the relationships between various features and preparing the data for predictive modelling. 

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
We also removed rows where the count quantities of some features were extremely low and would be hard for the model to learn.

For example, cut_quality features of Good, Fair and Ideal had counts of 28, 5 and 1 respectively.  
![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/202f7912-0884-4586-9dc4-f8146447495d)

Other data rows removed were:

culet_condition features of Chipped (qty 18) and Abraded (qty 8), girdle_min features XTN and STN (quantities 290 and 24), and girdle_max features XTN and STN (quantities 33 and 12),fluor_intensity features of Unknown (qty 113) and Slight (qty 12) and finally polish features of Fair (qty 7) and Poor (qty 2)

This reduced our dataset to 213,134 rows.


### Data Binning and Grouping
Certain features are grouped or combined into new categories.  
This approach helps in addressing low counts for certain quality values and making the data more manageable and meaningful for analysis and modelling.

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

## Selecting Features for Modelling
Categorical and numerical features are separated, and the target variable is defined.

## Correlation Analysis
Pearson correlation and Seaborn heatmap are used to analyse the relationships between numerical features.  

### Pearson correlation
We wanted to understand how strongly each numerical feature is related to the target variable “total_sales_price” and Pearson correlation is suitable for identifying linear relationships.

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/4ea8607b-72d0-4254-a6e6-b2e141ceb833)

### Heatmap
We then ran a heatmap to visualize the Pearson correlation, making it easier to identify and interpret relationships between the features.

![image](https://github.com/XNNgithub/Diamond-Price-Modelling/assets/134125287/c126966f-2d70-4985-b438-1e8896d30ec5)

The strong positive correlation of 0.75 between carat weight and total sales price suggests that, in this dataset, higher carat weight diamonds tend to command higher prices.

This finding underscores the significance of carat weight as a key determinant of a diamond's value, potentially reflecting consumer preferences for larger, more substantial stones.

## Seaborn Pair Plot
A Seaborn pair plot was created to visualize relationships among the features

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
