### REST API

# Implementation of CRUD to save person and their contacts

# Stack
- NodeJS
- Express Framework
- Jest test
- Docker
- Babel
- Eslint
- Prettier

# Endpoints
- ```GET /api/person```
- ```POST /api/person```
   - Payload example
```json
{
  "name": "Luiz Filipe",
  "contacts": [
    {
      "service": "facebook",
      "contact": "luizfilipemoresco"
    }
  ]
}
```
- ```PUT /api/person([0-9]+)```
   - Payload example
```json
{
  "name": "Luiz Filipe",
  "contacts": [
    {
      "service": "facebook",
      "contact": "luizfilipemoresco"
    },
    {
      "service": "phone",
      "contact": "48 9 96**-5****"
    }
  ]
}
```
- ```DELETE /api/person/([0-9]+)```

# How to run on local environment
- Run the following command ```make``` and it will use docker-compose to start PostegreSQL and the application in development mode

# How to run on production environment
- Run the following command ```make prod``` and it will run the docker with PostgreSQL and the application

# Running the tests
- Run ```yarn``` to install the dependecies
- Run ```yarn test``` to execute all the unit tests
- Run ```yarn dev:coverage``` to help you while you're writing tests
- Run ```yarn coverage``` it will generate a directory called by  ```coverage``` when you can see via browser the code coverage test. Example ```firefox coverage/lcov-report/index.html```
