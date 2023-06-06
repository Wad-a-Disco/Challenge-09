// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD 3-Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else {
    return '';
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD 3-Clause') {
    return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
  } else {
    return '';
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }

  const licenseLink = renderLicenseLink(license);

  return `## License

This project is licensed under the ${licenseLink}.`;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  const featuresList = generateList(data.features);
  const technologiesList = generateList(data.technologies);
  const installationList = generateList(data.installation);
  const usageList = generateList(data.usage);

  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installationList}

## Usage

${usageList}

## Features

${featuresList}

## Technologies Used

${technologiesList}

${licenseSection}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any additional questions, you can reach out to me via GitHub or email:

GitHub: [${data.github}](https://github.com/${data.github})

Email: ${data.email}
`;
}

// Helper function to generate a bullet point list
function generateList(items) {
  if (Array.isArray(items)) {
    return items.map((item) => `- ${item}`).join('\n');
  } else if (typeof items === 'string') {
    return items.split(',').map((item) => `- ${item.trim()}`).join('\n');
  }
  return '';
}


module.exports = generateMarkdown;
