// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license == "Apache") {
    return `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  } else if (license == "GNU") {
    return `![License: GNU](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return `https://opensource.org/licenses/MIT`
  } else if (license == "Apache") {
    return `https://opensource.org/licenses/Apace-2.0`
  } else if (license == "GNU") {
    return `https://opensource.org/licenses/GPL-3.0`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`
  } else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents
  
  [Installation](#install)

  [Usage](#use)

  [License](#license)

  [Contributing](#contribute)

  [Tests](#tests)

  [Questions](#questions)

  ## Installation <a name="install"></a>

  ${data.install}

  ## Usage <a name="use"></a>

  ${data.use}

  ## License <a name="license"></a>

  ${renderLicenseSection(data.license)}

  ## Contributing <a name="contribute"></a>

  ${data.contribute}

  ## Tests <a name="tests"></a>

  ${data.test}

  ## Questions <a name="questions"></a>

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/keddie024).

`;
}

module.exports = generateMarkdown;
