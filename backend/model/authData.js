// This is a mock database of user authentication data
var authData = {
    "users": [
      {
        "username": "Alagappan",
        "password": "password123",
        "email": "alagappan141@gmail.com",
        "firstName": "Alagappan",
        "lastName": "Krishnappan"
      },
      
    ]
  };
  
  // This function checks if the given username and password are valid
  function isValidUser(username, password) {
    for (var i = 0; i < authData.users.length; i++) {
      if (authData.users[i].username === username && authData.users[i].password === password) {
        return true;
      }
    }
    return false;
  }
  
  // This function returns the user object for the given username
  function getUserByUsername(username) {
    for (var i = 0; i < authData.users.length; i++) {
      if (authData.users[i].username === username) {
        return authData.users[i];
      }
    }
    return null;
  }
  