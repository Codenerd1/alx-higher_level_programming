#!/usr/bin/node
const request = require('request');

// Get the API URL from the command-line arguments
const apiUrl = process.argv[2];

if (!apiUrl) {
  process.stderr.write('Usage: ./6-completed_tasks.js <API_URL>\n');
  process.exit(1);
}

// Send a GET request to the provided API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    process.stderr.write(error + '\n');
  } else if (response.statusCode !== 200) {
    process.stderr.write(response.statusCode + '\n');
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
      for (const userId in completedTasks) {
        const message = userId + ': ' + completedTasks[userId] + '\n';
        process.stdout.write(message);
      }
    } catch (parseError) {
      process.stderr.write(parseError + '\n');
    }
  }
});
