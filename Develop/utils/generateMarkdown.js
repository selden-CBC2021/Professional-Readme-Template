// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // switch statement to display the proper license badge
  switch (license) {
    case 'MIT':
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    break;
    case 'Apache 2.0':
      badge = "[![License](https://img.shields.io/badge/License-Apache%202-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    break;
    case "BSD 3.0":
      badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    break;
    case "GPL 3.0":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    break;
    case "None":
      badge = "";
    break;
  };
  return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // switch statement to display the proper license link
  switch (license) {
    case 'MIT':
      link = "(https://opensource.org/licenses/MIT)";
    break;
    case 'Apache 2.0':
      link = "(https://opensource.org/licenses/Apache-2.0)";
    break;
    case "BSD 3.0":
      link = "(https://opensource.org/licenses/BSD-3-Clause)";
    break;
    case "GPL 3.0":
      link = "(https://www.gnu.org/licenses/gpl-3.0)";
    break;
    case "None":
      link = "";
    break;
  };
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  // template literal to fill in readme.md with answers from inquirer
  return `# ${answers.title}
  ![badge](https://img.shields.io/badge/license-${answers.license}-yellow)
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
  --https://opensource.org/licenses/${answers.license}
  <br />
  --This application is covered under the ${answers.license} license.
  ## How to Contribute
  --${answers.contribution}
  ## Tests
  --${answers.tests}
  ## Questions
  --My GitHub account is https://github.com/${answers.github}

  --If you have any questions please email me at ${answers.email}
  `;
 }


module.exports = generateMarkdown; 
