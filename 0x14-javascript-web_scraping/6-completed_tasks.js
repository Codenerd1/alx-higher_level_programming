#!/usr/bin/node
const request = require('request');

// Get the API URL from the command-line arguments
const apiUrl = process.argv[2];

// Send a GET request to the provided API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    process.stderr.write(error);
  } else if (response.statusCode !== 200) {
    process.stderr.write(response.statusCode);
  } else {
    try {
      const todos = JSON.parse(body);
      const completedTasks = {};

      // Loop through each todo item
      todos.forEach(todo => {
        if (todo.completed) {
          if (!completedTasks[todo.userId]) {
            completedTasks[todo.userId] = 0;
          }
          completedTasks[todo.userId]++;
        }
      });

      // Print users with completed tasks
      process.stdout.write(JSON.stringify(completedTasks, null, 2));
    } catch (parseError) {
      process.stderr.write(parseError);
    }
  }
});
