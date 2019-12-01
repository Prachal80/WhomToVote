import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression
import json
import boto3
import os

os.environ['aws_access_key_id'] = 'xxxxxxxxx'


train = pd.read_csv('train.csv')
test = pd.read_csv('test.csv')
data = pd.read_csv('train.csv')


rep = pd.get_dummies(train['Winner'],drop_first=True)
train = pd.concat([train,rep],axis=1)
train.drop('Winner',axis=1,inplace=True)
y = train['Republican']
X = train.drop('Republican',axis=1)

lg = LogisticRegression()

lg.fit(X,y)

predictions = lg.predict(test)
rep = 0
dem = 0
for val in predictions:
    if val == 0:
        dem += 1
        #print("Democrats")
    else:
        rep += 1
        #print("Republicans")

r = {"rep" : rep,"dem":dem}

with open('results.json','w') as f:
    f.write(json.dumps(r))

total = rep + dem
per_dem = dem/total*100
per_rep = 100-per_dem
print("Democrat chances to win : ", per_dem)
print("Republican chances to win : ", per_rep)
per_r = {"per_rep": per_rep, "per_dem": per_dem}

with open('results_per.json','w') as f:
    f.write(json.dumps(per_r))


democrat = []
republican = []

for val in data[data['Winner'] == 'Democrat'].mean():
    democrat.append(val)


for val in data[data['Winner'] == 'Republican'].mean():
    republican.append(val)

democrat = data[data['Winner'] == 'Democrat'].mean()
republican = data[data['Winner'] == 'Republican'].mean()
republican.to_json('republican.json')
print('Saved republican.json file to directory')
democrat.to_json('democrat.json')
print('Saved democrat.json file to directory')

s3 = boto3.client('s3')

s3.upload_file('results_per.json','whomtovotedemo','results_per.json', ExtraArgs={'ACL': 'public-read'})
s3.upload_file('republican.json','whomtovotedemo','republican.json', ExtraArgs={'ACL': 'public-read'})
s3.upload_file('democrat.json','whomtovotedemo','democrat.json', ExtraArgs={'ACL': 'public-read'})
s3.upload_file('results.json','whomtovotedemo','results.json', ExtraArgs={'ACL': 'public-read'})
print('uploaded results.json file to directory')
print("--------END--------")
