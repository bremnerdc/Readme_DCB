function githubTitle(github, title) {
  const completeTitle = title.toLowerCase().split("").join("-");
  return `https://github.com/${github}/${completeTitle}`
}
//function to get liscense 
function getLicense(license, github, title) {
  if (license !== "None") {
  return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${githubTitle(github, title)})`
}
return ``
} function licenseSection(license) {
  if (license !== "None") {
    return (
      `##License
      This project is licensed under ${license}.
      `
    )
  }
  return ``
}

function generateMarkdown(data) {
  return `
# ${data.title}
${getLicense(data.license, data.github, data.title)}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${data.usage}
${licenseSection(data.license)}
* [License](#license)

* [Contributing](#contributing)
${data.contributing}
* [Tests](#tests)
${data.tests}
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}
  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

<img src="${data.avatar_url}" alt="avatar" style="border-radius: 16px" width="30" />

If you have any questions about the repo, open an issue or contact [${data.github}](${data.url}) directly at ${data.email}.

`;
}
module.exports = generateMarkdown;
