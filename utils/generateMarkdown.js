function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache-2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'Boost':
      return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    case 'BSD-2-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
    case 'BSD-3-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    case 'Eclipse':
      return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    case 'GNU-GPL-v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    case 'IBM':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case 'Mozilla-2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    case 'ODbL':
      return '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)'
    case 'SIL':
      return '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)'
    case 'None':
      return ''
    default:
      break;
  }
}

function renderLicenseLink(license) {
  switch(license) {
    case 'Apache-2.0':
      return '[Apache-2.0](https://opensource.org/licenses/Apache-2.0)'
    case 'Boost':
      return '[Boost](https://www.boost.org/LICENSE_1_0.txt)'
    case 'BSD-2-Clause':
      return '[BSD-2-Clause](https://opensource.org/licenses/BSD-2-Clause)'
    case 'BSD-3-Clause':
      return '[BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause)'
    case 'Eclipse':
      return '[Eclipse](https://opensource.org/licenses/EPL-1.0)'
    case 'GNU-GPL-v3':
      return '[GNU-GPL-v3](https://www.gnu.org/licenses/gpl-3.0)'
    case 'IBM':
      return '[IBM](https://opensource.org/licenses/IPL-1.0)'
    case 'ISC':
      return '[ISC](https://opensource.org/licenses/ISC)'
    case 'MIT':
      return '[MIT](https://opensource.org/licenses/MIT)'
    case 'Mozilla-2.0':
      return '[Mozilla-2.0](https://opensource.org/licenses/MPL-2.0)'
    case 'ODbL':
      return '[ODbL](https://opendatacommons.org/licenses/odbl/)'
    case 'SIL':
      return '[SIL](https://opensource.org/licenses/OFL-1.1)'
    case 'None':
      return ''
    default:
      break;
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage Information](#usage)
  * [Contribution Guidelines](#guidelines)
  * [License](#license)
  * [Test Instructions](#testing)
  * [Contact](#contact)
  ## Installation
  ${data.install}
  ## Usage Information
  ${data.usage}
  ## Contribution Guidelines
  ${data.guidelines}
  ## License
  ${renderLicenseLink(data.license)}
  ## Test Instructions
  ${data.testing}
  ## Contact
  Github: [Github](https://github.com/${data.github})
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
