// src/mockApi.js
export const simulateApiCall = (data) => {
    return new Promise((resolve, reject) => {
      // Simulate a delay, like a real API request
      setTimeout(() => {
        // Simulate an error if the email is already taken
        if (data.email === 'test@test.com') {
          reject('Email is already in use');
        } else {
          resolve('User registered successfully');
        }
      }, 2000); // 2 seconds delay to simulate network latency
    });
  };
  