FROM python:3.11

WORKDIR /app

# install requirement
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

# run api
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]

