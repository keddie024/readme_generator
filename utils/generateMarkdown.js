// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license != "") {
    return `This project is licensed under the ${data.license} license.`
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

  ${data.license}

  ## Contributing <a name="contribute"></a>

  ${data.contribute}

  ## Tests <a name="tests"></a>

  ${data.test}

  ## Questions <a name="questions"></a>

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/keddie024).

`;
}

module.exports = generateMarkdown;
