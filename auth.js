const mongoose = require('mongoose');
const User = require('./models/User');

// This function logs in a user with the given username and password
async function login(username, password) {
  try {
    // Find the user with the given username
    const user = await User.findOne({ username });

    // If no user is found, return null
    if (!user) {
      return null;
    }

    // Check if the password is correct
    const passwordMatches = await user.checkPassword(password);

    // If the password is incorrect, return null
    if (!passwordMatches) {
      return null;
    }

    // If the login was successful, return the user object
    return user;
  } catch (error) {
    // If there was an error, throw it
    throw error;
  }
}

// This function logs out the current user
function logout() {
  // TODO: Implement logout logic
}

// This function gets the current user's information
async function getUser(userId) {
  try {
    // Find the user with the given ID
    const user = await User.findById(userId);

    // If no user is found, return null
    if (!user) {
      return null;
    }

    // Return the user object
    return user;
  } catch (error) {
    // If there was an error, throw it
    throw error;
  }
}

module.exports = {
  login,
  logout,
  getUser,
};
