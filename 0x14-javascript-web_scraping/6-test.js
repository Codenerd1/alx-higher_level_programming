#!/usr/bin/node
const request = require('request');

// Get the API URL from the command-line arguments
const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Please provide the API URL as the first argument.');
  process.exit(1);
}

// Send a GET request to the provided API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Failed to fetch data. Status code:', response.statusCode);
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

      // Construct the output string with single quotes around keys
      let output = '{';
      for (const userId in completedTasks) {
        output += ` '${userId}': ${completedTasks[userId]},\n`;
      }
      // Remove the trailing comma
      output = output.slice(0, -1);
      output += ' }\n';

      // Print the completed tasks as an object
      console.log(output);
    } catch (parseError) {
      console.error('Error parsing response:', parseError);
    }
  }
});
