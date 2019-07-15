# LAB - 07-b

## Middleware

### Author: Alvian Joseph

### Links and Resources
* [link to api-server lab](https://github.com/alvian-401-advanced-javascript/lab-07-api-server)
* [submission PR](https://github.com/alvian-401-advanced-javascript/lab-07--middleware)

### server.js  
creates a simple express server that uses middleware to execute 
tasks before fulfilling GET requests.

### modules  
  * `onlyD.js` - exports a function `onlyD()` that runs only on the /d route that raises an error using next  
  * 404/505 - export error handling functions for status 500 and 404  
  


#### REST methods
* `/` GET`  




### Documentation
* Not required for this lab


#### Running the app
* nodemon index.js

#### Tests
npm test server.test.js
