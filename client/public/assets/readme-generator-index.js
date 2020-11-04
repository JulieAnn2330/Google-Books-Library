/* Pseudocode
1. Use node.js
2. Command line application
3. Generate good README
4. Take user input to generate README
5. Input fields?

6. Items needed:
   => a. Title
   => b. Short Description of project explaining what, why and how
   => c. Table of Contents
        => i. Links that will take them to the appropriate spot in the doc
   => d. Installation - provide step by step directions for installation 
   => e. Usage - Provide instructions and examples for use including screenshots
   => f. License - include list of options (MIT, Apache License 2.0, Boost Software License 1.0, The Unlicense, GNU AGPLv3, WTFPL)
        => i. Badges - display badge at top of README - this relates to the license
                1. MIT link = [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
                2. Apache Link = [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
                3. Boost Software 1.0 = [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
                4. The Unlicense = [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
                5. GNU AGPLv3 = [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
                6. WTFPL = [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
   => g. Contributing - guidelines on how to do so
   => h. Tests - write tests for application and explain how to run them
   => i. Questions  
        => i. Contact info - link to GitHub username and profile
        => ii. email address with directions on how to reach user with additional questions

7. Optional 
    a. Deployed link
    b. Optional Features tag
    c. Credits - List collaborators and link to their GitHub profile,websites utilized with links and 
                tutorials used with links
 
8. Questions to ask - use prompts:
    a. What is the title of your project?
    b. What was your motiviation?
    c. Why did you build this project (NOT because it was homework)
    d. What problem does it solve?
    e. What did you learn?
    f. What makes your project stand out?
    g. Does it have a lot of features ( if so use Features tag)?
    h. GitHub username
    i. License pref

9. Walk-through Video - use Screencastify
*/

const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");

console.log("Welcome to the Good README Generator. Simply answer the next series of questions to generate a top-notch README.");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
     return inquirer.prompt([
          {
          type: 'input',
          name: 'title',
          message: '1. What is the title of your project?'
          },
          {
          type: 'input',
          name: 'description',
          message: '2. Provide a brief description of your project.'
          },
          {
          type: 'input',
          name: 'motivation', 
          message: '3. What was the motivation for creating this project?'
          },
          {
          type: 'input',
          name: 'problem',
          message: '4. What problem does it solve?'
          },
          {
          type: 'input',
          name: 'learn',
          message: '5. What did you learn from this project?'
          },
          {
          type: 'input',
          name: 'standOut',
          message: '6. What makes your project stand out?'
          },
          {
          type: 'input',
          name: 'features',
          message: '7. What features does your project have?'
          },
          {
          type: 'checkbox',
          message: '8. What technologies does your project incorporate? (Choose from list and hit enter to advance)',
          name: 'technology',
          choices: [
               'AJAX',
               'API Calls',
               'Axios',
               'Bootstrap',
               'CSS', 
               'Heroku',
               'HTML',
               'JavaScript',
               'jQuery',
               'moment.js',
               'mongoDB',
               'mongoose',
               'mySQL',
               'node.js'               
          ]},
          {
          type: 'input',
          name: 'installation',
          message: '9. Are there any required steps to install the project?'
          },
          {
          type: 'input',
          name: 'use',
          message: '10. How do you use the project?'
          },
          {
          type: 'input',
          name: 'git',
          message: '11. What is your GitHub username?'
          },
          {type: 'input',
          name: 'email',
          message: '12. Provide your email address for questions or comments.'
          },
          {
          type: 'list',
          message: "13. Which license would you prefer to use? (Hit enter to select)",
          name: 'license',
          choices:[
          'MIT',
          'ISC',
          'Unlicense', 
          'W3C'           
          ],    
          } 
     ])
};

function generateREADME(answers) {
 return `
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Good README Generator</title>
</head>
<body>
<div id = "top">

<h2>${answers.title}</h2> <a href="#license"><img src= "https://img.shields.io/badge/License-${answers.license}-blue.svg"></a><br>

<hr color= "slateblue" noshade>

<h2>Table of Contents:</h2>
<a href="#description" class="contents">1. Description of Project</><br>
<a href="#technology" class="contents">2. Technologies Used</a><br>
<a href="#installation" class="contents">3. Installation Directions</a><br>
<a href="#use" class="contents">4. How to Use the Project</a><br>
<a href="#contributors" class="contents">5. Contributing</a><br> 
<a href="#questions" class="contents">6. Questions or Comments</a><br>
<a href="#license" class="contents">7. License</a><br>
<a href="#screenshot" class="contents">8. Screenshots of Project</><br>
<br>

<hr color= "slateblue" noshade>

<h3 id='description'>Description of Project</h3>
<p>${answers.description} ${answers.motivation} ${answers.problem} ${answers.learn} ${answers.standOut} ${answers.features}</p><br>
<a href="#top" id="start">(Back to Top of Page)</a><br>
<br>
<hr color= "slateblue" noshade>

<h3 id='techology'>Technologies Used</h3>
<p>This project incoporates the following tecnologies:<br>
${answers.technology}</p><br>
<a href="#top" id="start">(Back to Top of Page)</a><br>
<br>
<hr color= "slateblue" noshade>

<h3 id='installation'>Installation</h3>
<p>${answers.installation}</p><br>
<a href="#top" id="start">(Back to Top of Page)</a><br>
<br>
<hr color= "slateblue" noshade>

<h3 id='use'>How to Use the Project</h3>
<p>${answers.use}</p><br>
<a href="#top" id="start">(Back to Top of Page)</a><br>
<br>
<hr color= "slateblue" noshade>

<h3 id='contributors'>Contributing to the Project</h3>
<p>Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.</p><br>
<a href="#top" id="start">(Back to Top of Page)</a><br>
<br>
<hr color= "slateblue" noshade>

<h3 id='questions'>For Questions or Comments</h3>
<p>Please contact me at github.com/${answers.git } or ${answers.email } for questions or comments.</p><br>
<a href="#top" id="start">(Back to Top of Page)</a><br>
<br>
<hr color= "slateblue" noshade>

<h3 id='license'>License</h3>
<p>This project incorporates the following license: <a href="https://opensource.org/licenses/${answers.license}">${answers.license}</a></p>
<a href="#top" id="start">(Back to Top of Page)</a><br>

<hr color= "slateblue" noshade>

<h3 id='screenshot'>Screenshots</h3>
    
</body>
</html> `;
}

// function to initialize program
async function init() {
    try {
         const answers = await promptUser();

         const readMe = generateREADME(answers);

         await writeFileAsync('README.md', readMe);
         console.log('Successfully written to README.md');
         
    } catch (err) {
         console.log(err);
    }
}

// function call to initialize program
init(); 


