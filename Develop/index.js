const inquirer = require("inquirer");
const fs = require('fs')

const generateReadme = (answers) => 
`# ${answers.title}
${answers.license}
## Description
--${answers.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
--${answers.installation}
## Usage
--${answers.usage}
## License
--${answers.license}
## How to Contribute
--${answers.contribution}
## Tests
--${answers.tests}
## Questions
--${answers.github}
--If you have any questions please email me at ${answers.email}
`


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your repository?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project.?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use. Include screenshots as needed.',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'What are the contribution guidelines to your project?',
      choices: ['Use industry standard Contributor Covenant', 'Create your own'],
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Did you write any tests for your application? Please provide code examples and how to run them',
      name: 'tests',
    },
    {
      type: 'checkbox',
      message: 'Which license will you be using?',
      choices: ['MIT License', 'GNU GPLv3', 'Apache License 2.0', 'ISC License'],
      name: 'license',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your E-mail address.',
    },

  ]).then((answers) => {
    const readmePageContent = generateReadme(answers);
  
    fs.writeFile('README.md', readmePageContent, (err) => {
      err ? console.error(err) : console.log("Your README has been generated!");
    })
  })


// TODO: Create a function to write README file

// function writeToFile(fileName, data) {
//   then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });
// }
// fs.readFile('data.csv', 'utf8', (error, data) =>
//   error ? console.error(error) : console.log(data)
// );

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

// fs.appendFile()
// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
