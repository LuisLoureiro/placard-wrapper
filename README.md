# placard-wrapper
A wrapper of Placard, a Portuguese online gambling system. The idea of this application is to provide a better user-experience.

### Deploy
Before deploying app we must ensure that the following environment variables are defined:
* MONGODB_NAME = The name of the MongoDB database
* MONGODB_ADDRESS = The URL of the MongoDB instance
* MONGODB_PORT = The port number of the MongoDB instance
* MONGODB_USER = The user name for authentication
* MONGODB_PASS = The password of the above user

### Database name
Database name was changed to the name of the one configured in Heroku.
Tried to dynamically set it across source files, using an environment variable but couldn't do it because of the GraphQL queries.
So, decided to change it statically in all files.
* DB name = heroku_rvm7q988
