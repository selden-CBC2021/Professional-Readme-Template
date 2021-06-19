const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your repository?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project.',
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
      type: 'input',
      message: 'What are the contribution guidelines to your project?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Did you write any tests for your application? Please provide code examples and how to run them',
      name: 'tests',
    },
    {
      type: 'list',
      message: 'Which license will you be using?',
      choices: ['MIT', 'GPL3.0', 'Apache2.0', 'BSD3', 'None'],
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

  ])


// TODO: Create a function to write README file
.then((answers) => {
    const readmePageContent = generateMarkdown(answers);
  
    fs.writeFile('README.md', readmePageContent, (err) => {
      err ? console.error(err) : console.log("Your README has been generated!");
    })
  })


// TODO: Create a function to initialize app
function init() {
  
}

// Function call to initialize app
init();
