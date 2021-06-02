// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
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
  --My GitHub account is https://github.com/${answers.github}
  --If you have any questions please email me at ${answers.email}
  `;
}

module.exports = generateMarkdown;
