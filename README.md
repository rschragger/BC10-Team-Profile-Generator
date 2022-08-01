# BC10-Team Profile Generator

  ## Description
  
  [![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
  
  This Node command line application will prompt the user for details about team members. It will then create an HTML directory page with a card for each team member. Team members will be demarcated by their roles and certain details asked for will be different for each role.

  Github Repository: [rschragger/BC10-Team-Profile-Generator](https://github.com/rschragger/BC10-Team-Profile-Generator)
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
      - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
      - [Contacts](#contacts)
  
  ## Installation
   
  Installation Instructions:
- Go to https://github.com/rschragger/BC10-Team-Profile-Generator and fork/clone the repository
- Run `npm install` for the repository to install all necessary modules
-  Run `node index` (or `npm start`) to start the application
</p>
  
  ## Usage
   
  Usage Instructions:
- The application is based on prompted questions to be answered
- Most questions deal with team members details which need answering
-  As you progress through the questions you will have a chance to
    - Add new team members
    - Make html <i>or</i>
    - End the program
-  Selecting `Make HTML` will allow you to see a current version of the HTML and then return to the program and continue adding
    -  The HTML document is in the `/Dist` directory and named `index.html`
-  When you are satisfied you are finished, you may select `End process and construct final HTML` whereupon the application will end after constructing the final HTML
</p>

Pleasee see screencast at [Screencastify](https://drive.google.com/file/d/1LHseL7g5Z0DFNQxArCaRiGKwerPUtCOn/view)
  
  ## Credits
 
  Languages
- HTML
- CSS
- JavaScript
- Node JS
</p>
  
  Third Party Assets
- Inquirer
- FS
- Jest
</p>
  
  Tutorials
- Stack Overflow
- W3 Schools
-  Traversy Media
-  jestjs.io
</p>
  
  ## License
   
  This application is licensed under Creative Commons - CC0
  
  ## Features
   
- The ability to see a preview of the final HTML as it is being prepared
- Validation on questions so that 
  - IDs cannot be repeated
  - emails are correctly structured
  - no null information is supplied by accident
    - note that IDs and Office numbers are not validated as number only because these have potential string answers
- Colouring important information in the CLI
- Using colour to help deliniate the roles and a responsive design for the HTML

Future ideas
- Add a few more unit tests
- Add more information to the team members (e.g. mobile numbers)
- Add the ability to save a version of the data to disk and then build from this data with new people, delete people who have left and update current members' information
</p>
  
  ### Contributions
   This is a student work and as such is not expected to be built upon
  
  
  ## Tests
  
  Run `npm test` in command line interface using Jest
- _tests_/Employee.test.js
- _tests_/Engineer.test.js
- _tests_/Intern.test.js
- _tests_/Manager.test.js
</p>
  
  ## Questions
   
  
  ### Contacts
   
  You can reach me for additional questions at:
  - Email: [reeveschragger@gmail.com](mailto:reeveschragger@gmail.com)

  - GitHub: [rschragger GitHub page](https://github.com/rschragger)

  
  <div class="footer" style="text-align:right; font-size:smaller"><hr>
  &copy; Copyright 2022 Reeve Schragger
</div>  