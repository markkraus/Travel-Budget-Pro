[CS1530-Project](#cs1530-project)
  * [Project Proposal](#project-proposal)
  * [Functional Requirements](#functional-requirements)
  * [Nonfunctional Requirements](#nonfunctional-requirements)
  * [Software Interfaces](#software-interfaces)
  * [Use Case List](#use-case-list)
  * [Classes and Objects](#classes-and-objects)

# CS1530-Project
<br>
<br>
<br>

# Project Proposal
## What
The Travel Expense Tracker is a web application aimed at simplifying and enhancing the travel experience for users by providing robust **expense tracking, budget management, and financial analysis tools**. With the increasing popularity of travel and tourism worldwide, it has become essential for travelers to manage their expenses effectively and make informed financial decisions while exploring new destinations. The Travel Expense Tracker addresses this need by offering a user-friendly platform for recording, categorizing, and analyzing travel expenses, thereby empowering users to stay within budget, track spending patterns, and optimize their travel finances.
## Why
The importance of the Travel Expense Tracker lies in its ability to address common pain points faced by travelers, such as **overspending, budgeting challenges, and difficulty in tracking expenses** across different categories. By providing users with a **centralized platform to manage their travel finances**, the application streamlines the expense tracking process and helps users make smarter financial decisions during their trips. Additionally, the Travel Expense Tracker **promotes financial awareness and accountability among users**, encouraging responsible spending habits and ensuring a more enjoyable and stress-free travel experience.
## How
The Travel Expense Tracker will be constructed using modern web development technologies and best practices to ensure reliability, scalability, and user satisfaction. The frontend of the application will be built using **HTML, CSS, and JavaScript, with frameworks like React.js or Angular** for dynamic user interfaces. The backend will be developed using **Node.js with Express.js** for server-side logic and API development. Data storage and management will be handled using **MongoDB or MySQL** databases, allowing for efficient storage and retrieval of user data, expense records, budget information, and authentication details. Additionally, the application will integrate with third-party APIs for currency conversion, financial data integration, and authentication to enhance functionality and provide users with a seamless experience. Overall, the Travel Expense Tracker will be constructed with a user-centric approach, prioritizing usability, functionality, and data security to deliver a valuable tool for travelers worldwide.
<br>
<br>
<br>

# Functional Requirements
## User Registration
* Users should be able to create accounts and log in securely to access the application.
* Authentication mechanisms should ensure that only registered user can access their own expense records and settings.
## Expense Tracking
* Users should be able to log their travel expenses, including date, amount, category, and description.
* The application should support multiple currencies for recording expenses incurred in different countries.
## Expense Categorization/Budgeting
* The application should provide predefined expense categories (i.e. lodging, transportation, food) and allow users to create custom categories. <br>
* Users should be able to set overall travel budgets and allocate budgets for each expense category.
## Expense Visualization
* The application should generate visual representations of users' spending patterns using charts, graphs, and/or tables.
* Users should be able to view breakdowns of their expenses by category, compare actual spending to budgeted amounts, and track their overall travel expenses over time.
## Currency Conversion
* For international travelers, the application should support real-time currency conversion and display expenses in both the user’s home currency and the local currency of the destination.
## Data Reporting and Exporting
* Users should have the option to export their expense data into a PDF version for further analysis or record-keeping purposes.
* The application should allow the user to create multiple expense reports summarizing users' spending during different trips.
## Notifications and Alerts
* The application should warn the user when they exceed budget limits, reach predefined spending thresholds, or encounter unusual spending patterns.
## Settings Modification
* The application should allow the user to customize application controls such as visual changes and privacy settings.
<br>
<br>
<br>

# Nonfunctional Requirements
## Performance
* The system should respond to user interactions within a reasonable time frame (i.e. a few seconds).<br>
* The system should support concurrent access by multiple users without data corruption or inconsistencies.<br>
## Security
* User passwords, personal information, and sensitive data should be encrypted during storage and transmission.
* Users should be authenticated before accessing their accounts, and access to sensitive functionalities should be authorized based on user roles and permissions.
## Reliability
* The system should be available and accessible to users at all times, with minimal downtime for maintenance or updates. It should aim for high availability 99% of the time.
* The system should be resilient to failures, with mechanisms in place to detect and recover from errors or crashes gracefully.
## Usability
* The user interface should be intuitive, visually appealing, and easy to navigate. It should follow usability best practices to minimize user errors and maximize user satisfaction.
## Compatbility
* The system should work consistently across different web browsers (i.e. Chrome, Firefox, Safari, Edge) and versions.
## Maintainability
* The system should be modularized, with well-defined components and clear separation of concerns.
* Comprehensive documentation should be provided for developers and end users covering system architecture, APIs and usage guidelines.
## Performance Testing
* The system should undergo stress-testing to identify its breaking points and limitations under extreme conditions.
## Compliance
* The system should comply with relevant laws, regulations, and industry standards related to data privacy and security.
<br>
<br>
<br>

# Software Interfaces
![image](https://github.com/Scrum-Team-Six/CS1530-Project/assets/91558299/43998fc3-7583-4239-9448-bc487c63edff)
<br>
<br>
<br>

# Use Case List
| **Use Case ID** | **Primary Actor** | **Use Case** |
|-------------|---------------|------------------------|
| UC-3.3.1    | End User      | Register a New User    |
| UC-3.3.2    | End User      | User Login             |
| UC-3.3.3    | End User      | Edit Budget            |
| UC-3.3.4    | End User      | Manage Settings        |
| UC-3.3.5    | End User      | Download Budget Report |

## Register a New User
|                             |                                                |
|--------------------------------------|------------------------------------------------|
| **Use Case ID:**       | UC-3.3.1 |
| **Use Case Name:**     | Register a New User |
| **Created By:**        | Henry Uz  | 
| **Last Updated By:**    | Henry Uz |
| **Date Created:**      | 2/9/2024  | 
| **Last Revision Date:** | 2/9/2024 |
| **Actors:**            | The primary actor will be the end user         |
| **Description:**       | The reason for this use case is so that the user may registr for a new account on the system. The outcome will be adding the user to the underlying database and allowing them budget their traveling.|
| **Trigger:**           | The trigger for this event will be the user entering a username and password to create an account on the appropriate page.|
| **Preconditions:**     | 1. User will not already have an account with their desired username. |
| **Postconditions:**    | 1. User has an account created and registered. <br> 2. User is notified that this process was successful and prompts them to login. <br> <br> If unsuccessful: <br> 1. User account is not created. <br> 2. User is notified of what the error is regarding their entry.|
| **Normal Flow:**       | 1. User enters their desired username. <br> 2. User enters their desired password. <br> 3. Check if the username and password meet required credentials as specified. <br> 4. Register the new user. |
| **Alternative Flows:** | 3a. In step 3 of normal flow, the user entries does not meet the specified criteria. <br> 1. The user is notified that they must fulfill the criteria specified for the password. <br> 2. The use case restarts and awaits another attempt to register. <br> <br> 4a. In step 4 of normal flow, if user does not enter any text. <br> 1. The system will alert the user that they must populate the fields. <br> 2. Use case restarts and awaits another user attempt. <br> <br> 4b. In step 4 of the normal flow, if an account with this name already exists <br> 1. Notify the user that this username is already taken. <br> 2. Use case restarts and awaits another user attempt. |
| **Exceptions:**        | 4a. In step 4 of the normal flow, if the database is not initialized <br> 1. The registration will not be completed. <br> 2. An error will be presented, alerting host machine of this issue. <br> 3. Use case must abort until error is corrected by host |
| **Includes:** | This use case will ot call other use cases. |
| **Frequency of Use:** | This use case will be executed only once per new user. |
| **Special Requirements:** | The username and password will need to be checked for special characters and criteria specified in this SRS. |
| **Assumptions:** | The assumptions made are that the user is entering English text. |
| **Notes and Issues:** | As of creating this use case there are no details; TBD. | 

![image](https://github.com/Scrum-Team-Six/CS1530-Project/assets/91558299/e3c6c62d-4985-44b9-be02-6270820c62e6) <br>
<br>
<br>
<br>

## User Registration

| **Actor**           | New User                                  |
|---------------------|-------------------------------------------|
| **Description**     | The user creates a new account.           |
| **Trigger**         | User navigates to the registration page. |
| **Preconditions**   | None                                      |
| **Postconditions**  | User's account is created.                |

#### Normal Flow:
1. User accesses the registration page.
2. User enters their desired username, email, and password.
3. User confirms the registration.
4. System validates the input data and creates a new account.
5. User is redirected to their



# Classes and Objects
![image](https://github.com/Scrum-Team-Six/CS1530-Project/assets/91558299/830a751e-1cd3-488e-9160-69f7a6b9a3aa)

