# cypress-tests-skleptest

The cypress-tests-skleptest is an automated testing project for the fakestore.testelka.pl website, utilizing Cypress for end-to-end testing and Docker for environment isolation, ensuring consistency across machines and avoiding dependency conflicts. The project includes tools such as Cypress-cucumber-preprocessor for BDD-style tests, Cypress-file-upload for handling file uploads, date-fns for easy date manipulation, and multiple-cucumber-html-reporter for generating readable HTML reports from test results. With containerization, the project can be run seamlessly in various environments, greatly simplifying the development process and offering enhanced flexibility for both users and developers. Additionally, the project integrates GitHub Actions for Continuous Integration (CI), automating the building, testing, and deployment processes. GitHub Actions workflows are configured to run tests on every push or pull request to the main branch, ensuring that code changes are thoroughly tested in a consistent environment.

## Features

• Cypress for end-to-end (E2E) testing, which allows for the simulation of real user interactions with the application.

• BDD (Behavior-Driven Development) approach with the Cucumber framework: Allows for writing tests in plain English (Gherkin syntax), making it easier for non-developers to understand the tests.

• Cypress-real-events: This library is used to simulate real user events like typing, clicking, and moving the mouse, making tests more accurate in mimicking user behavior.

• Dockerized environment: Ensures the tests run in a consistent, isolated environment, simplifying setup and execution. Docker containers can be used to run Cypress tests across different browsers using Selenium Grid.

# Technologies
• Cypress: End-to-end testing framework for fast, reliable, and easy-to-write tests.    
<ul>
<li>e2e/pages/ – This directory contains classes representing pages in your application, such as the cart page, login page, product page, etc.</li>
<li>e2e/scenarios/ – This directory holds the feature files written in Gherkin syntax, defining the scenarios for your tests, like adding a product to the cart or placing an order.</li>
<li>e2e/step_definitions/ – This folder contains step definition files, where each Gherkin step is mapped to a corresponding function that interacts with elements on the page, such as clicking the "Add to Cart" button for the "add product to cart" scenario. </li>
</ul> 

• Docker: Containerization technology to isolate the testing environment and ensure consistent test execution.

• Cypress-cucumber-preprocessor: Allows BDD-style tests using Gherkin syntax.

• Cypress-file-upload: Enables file upload functionality for tests involving file interactions.

• multiple-cucumber-html-reporter: Tool for generating comprehensive and user-friendly test reports.

• cypress-real-events: Adds support for simulating real user interactions in Cypress tests, improving the realism of tests.  

• GitHub Actions: The core technology for automating workflows, enabling CI/CD processes directly within GitHub repositories.  

# Project Structure

• .github/workflows/cypress.yml: Defines the CI workflow for the Cypress project, including steps for test execution, Docker setup, and reporting.

• cypress/integration: Contains the test cases for various functionalities like cart operations.

• cypress/support: Includes utility files for custom commands and Cypress configurations.

• docker-compose.yml: Configuration for running the application and Cypress tests in Docker containers.

• cypress.config.js: Configuration file for Cypress settings like base URL and test configurations.

# Setup and Usage

Before setting up Cypress, make sure the following tools are installed on your system:  

    Node.js (version 18.19 or later) - Install Node.js  
    npm (Node Package Manager) - Comes with Node.js
    Visual Studio Code

Setup Instructions


**Step 1: Clone the Repository**
Start by cloning the repository to your local machine:

    git clone https://github.com/werma56s/CodingGiantsTestAutomationEngineer.git  
    cd CodingGiantsTestAutomationEngineer  


**Step 2: Install Dependencies**
Install the necessary dependencies, including Cypress, by running:


    npm install

This will install all required packages listed in the package.json file.

**Step 3 (Or Step 4): Open Cypress - Running Tests**
Once the installation is complete, you can open Cypress in the interactive mode:


    npx cypress open

This command will open the Cypress Test Runner, which allows you to select and run individual tests or run all tests in the suite.

**Step 4: Build and start the Docker image and containers:**

    docker build . -t cypress-docker-parallelization

    docker-compose up -d

**Step 5: Run the tests on Docker**   

   Start the container:
![obraz](https://github.com/user-attachments/assets/e91ece3e-f688-44d5-8388-e150713ba224)   
   Inside the node, you will see:  
![obraz](https://github.com/user-attachments/assets/ee7bf7cb-9d66-4482-a1b4-b84e79df6034)   
   The results will be saved as a .json file in the 'report' folder:   
![obraz](https://github.com/user-attachments/assets/c3cf2ced-1a5d-4d01-af44-77603cca0655)   



Access the test reports generated by the multiple-cucumber-html-reporter for detailed results.
