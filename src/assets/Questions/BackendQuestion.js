export const jsQuizzBackend = {
  backendquestions: [
    {
      question:
        "Which of the following HTTP methods is commonly used for retrieving data from a server?",
      choices: ["POST", "GET", "PUT", "DELETE"],
      type: "MCQs",
      correctAnswer: "GET",
    },
    {
      question:
        "What does CRUD stand for in the context of database operations?",
      choices: [
        "Create, Read, Update, Delete",
        "Copy, Rename, Update, Delete",
        "Connect, Retrieve, Update, Deploy",
        "Collect, Read, Update, Debug",
      ],
      type: "MCQs",
      correctAnswer: "Create, Read, Update, Delete",
    },
    {
      question:
        "Which package manager is commonly used with Node.js?",
      choices: ["npm", "Pip", "Composer", "Yarn"],
      type: "MCQs",
      correctAnswer: "Yarn",
    },
    {
      question: "What is the purpose of the next() function in Express.js middleware?",
      choices: [
        "Sends the response to the client",
        "Skips the current middleware and moves to the next one",
        "Ends the request-response cycle",
        "Redirects the request to another route",
      ],
      type: "MCQs",
      correctAnswer: " Skips the current middleware and moves to the next one",
    },
    {
      question:
        "Which of the following is a valid projection in MongoDB to include only specific fields in the query result?",
      choices: [
        "#db.find({},{field1:1,field2:1})",
        "db.find({},{field1:0,field2:0})",
        "db.find({},{field1:true,field2:true})",
        "db.find({},{field1:false,field2:false})",
      ],
      type: "MCQs",
      correctAnswer: "db.find({},{field1:1,field2:1})",
    },
    {
      question: "How can you import a module in Node.js?",
      choices: [
        "require()",
        "import()",
        "include()",
        "module()",
      ],
      type: "MCQs",
      correctAnswer: "require()",
    },
    {
      question: "How does Node.js handle blocking I/O operations?",
      choices: [
        " By pausing the event loop until the operation is complete",
        " By utilizing multiple threads",
        "By ignoring blocking operations",
        " By delegating blocking operations to a separate process",
      ],
      type: "MCQs",
      correctAnswer:
        " By pausing the event loop until the operation is complete",
    },
    {
      question:
        "Which method is used to handle asynchronous operations in route handlers?",
      choices: [
        "asyncHandler()",
        "handleAsync()",
        "express.async()",
        " async/await syntax",
      ],
      type: "MCQs",
      correctAnswer:
        " async/await syntax",
    },
    {
      question:
        " Which of the following is a sharding key in MongoDB?",
      choices: [
        "_id",
        "name",
        " shardKey",
        " shardId",
      ],
      type: "MCQs",
      correctAnswer: "_id",
    },
    {
      question: ": What is the role of the Express.js framework in Node.js development?",
      choices: [
        "Database management",
        "Frontend design",
        "Web server framework",
        " Package management",
      ],
      type: "MCQs",
      correctAnswer: "Web server framework",
    },
    {
      question:
        " Which of the following is a commonly used testing framework for Node.js?",
      choices: [
        "Jest",
        "Mocha",
        "Jasmine",
        "All of the above",
      ],
      type: "MCQs",
      correctAnswer: "All of the above",
    },
    {
      question: "Which command is used to create a new database in MongoDB?",
      choices: [
        " db.newDatabase()",
        " useDatabase()",
        "db.createDatabase()",
        " create db",
      ],
      type: "MCQs",
      correctAnswer: "db.createDatabase()",
    },
    {
      question: " Which module is commonly used for environment configuration in Express.js?",
      choices: [
        "dotenv",
        "config-js",
        "env-handler",
        "express-env",
      ],
      type: "MCQs",
      correctAnswer: "dotenv",
    },
    {
      question: "Which of the following is a popular NoSQL database often used with Node.js?",
      choices: [
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "SQLite",
      ],
      type: "MCQs",
      correctAnswer: "MongoDB",
    },
    {
      question:
        "What is the purpose of the Node.js Buffer class?",
      choices: [" File system operations", " Data encryption", "Handling binary data", " Memory management"],
      type: "MCQs",
      correctAnswer: "Handling binary data",
    },
    {
      question:
        " What is the purpose of the 'aggregate' function in MongoDB?",
      choices: [
        "To count the total number of documents in a collection.",
        "To perform complex data transformations and aggregations.",
        "To create a new database by combining data from multiple collections.",
        "To index the documents in a collection.",
      ],
      type: "MCQs",
      correctAnswer: "To perform complex data transformations and aggregations.",
    },
    {
      question:
        " How do you configure CORS (Cross-Origin Resource Sharing) in Express.js?",
      choices: ["app.configureCORS()", "app.enableCORS()", "app.use(cors())", "app.allowCORS()"],
      type: "MCQs",
      correctAnswer: "app.use(cors())",
    },
    {
      question: "Which module in Node.js is used for file system operations?",
      choices: [
        "http",
        "fs",
        "net",
        "path",
      ],
      type: "MCQs",
      correctAnswer: "fs",
    },
    {
      question:
        " Which operator is used to update a value in an array field in MongoDB?",
      choices: ["$set", "$update", "$modify", "$change"],
      type: "MCQs",
      correctAnswer: "$set",
    },
    {
      question:
        " What is an index in MongoDB?",
      choices: ["A way to compress data for faster retrieval.", "A mechanism to enforce data integrity.", " A data structure that improves the speed of data retrieval operations on a database.", "A type of query language for MongoDB."],
      type: "MCQs",
      correctAnswer: " A data structure that improves the speed of data retrieval operations on a database.",
    },
    {
      question: "How do you terminate the Express.js application process?",
      choices: [
        "process.exit()",
        "app.terminate()",
        " app.close()",
        "exit.app()",
      ],
      type: "MCQs",
      correctAnswer: "process.exit()",
    },
    {
      question: "Which Node.js module is used for handling query strings in URLs?",
      choices: [
        "url",
        "querystring",
        "path",
        "http",
      ],
      type: "MCQs",
      correctAnswer: "querystring",
    },
    {
      question:
        "What does the term 'npm scripts' refer to in a Node.js project?",
      choices: ["Scripts for executing Node.js code", "Configuration files for npm", "Custom scripts defined in the package.json file", " Scripts for managing network protocols"],
      type: "MCQs",
      correctAnswer: "Custom scripts defined in the package.json file",
    },
    {
      question: "How can you install a Node.js package globally using npm?",
      choices: ["npm global package-name", " npm -g install package-name", " npm add package-name --global", "npm install -g package-name"],
      type: "MCQs",
      correctAnswer: "npm install -g package-name",
    },
    {
      question: "How can you access query parameters in Express.js?",
      choices: [
        "req.queryParams",
        "req.query",
        "req.params",
        "req.body",
      ],
      type: "MCQs",
      correctAnswer: "req.query",
    },
  ],
};

export const resultInitialState = {
  score: 0,
  correctAnswer: 0,
  wrongAnswers: 0,
};
