FROM python:3.7
ADD app.py /
ADD test.csv test.csv
ADD train.csv train.csv
RUN pip3 install numpy
RUN pip3 install pandas
RUN pip3 install sklearn
RUN pip3 install scikit-learn
RUN pip3 install boto3

CMD [ "python3", "./app.py" ]