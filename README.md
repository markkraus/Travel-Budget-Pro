[CS1530-Project](#cs1530-project)
  * [Project Proposal](#project-proposal)
  * [Functional Requirements](#functional-requirements)
  * [Nonfunctional Requirements](#nonfunctional-requirements)
  * [Software Interfaces](#software-interfaces)
  * [Use Case List](#use-case-list)
  * [Classes and Objects](#classes-and-objects)

# CS1530-Project
[Trello Board](https://trello.com/invite/b/6lvhIZHT/ATTI73870a8c1608c5ebd80a1d8c5b67beea2B5FABAE/cs-1530-project) <br>
[UML Diagrams](https://lucid.app/lucidchart/384a6b0b-4091-4ff8-afcc-241bd85cca15/edit?viewport_loc=-1933%2C-1025%2C2988%2C1660%2C0_0&invitationId=inv_6caa6a88-0067-4431-a453-9d6c825077ea) <br>
[SRS Document](https://1drv.ms/w/s!AkJ1OcSfKKliixtpA1iiXtBMwvKP)


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
## Compatibility
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
## User Registration
* Allows a user to create their username and password to login.
## User Login
* Create a simple login screen that allows a user to input their username and password.
* For new users, they will be able to select an option to create a new account.
## Dashboard
* Provide a centralized dashboard where useres can view an overview of their travel expenses, budget status, and recent activity.
## Expense Form
* Form for users to input their travel expenses, including fields for date, amount, category, description, and currency.
## Visual Tools
* Incorporate charts, graphs, and tables to visually represent users' spending patterns, budget breakdowns, and comparisons between actual spending and budgeted amounts.
## Settings
* Offer a settings menu where users can manage their account preferences, currenc preferences, notifications preferences, and other application settings.
<br>
<br>
<br>

# Use Case List
| **Use Case ID** | **Primary Actor** | **Use Case** |
|-------------|---------------|------------------------|
| UC-3.3.1    | End User      | Register a New User    |
| UC-3.3.2    | End User      | User Login             |
| UC-3.3.3    | End User      | Create Budget          |
| UC-3.3.4    | End User      | Edit Budget            |
| UC-3.3.5    | End User      | Manage Settings        |
| UC-3.3.6    | End User      | Download Budget Report |

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
| **Description:**       | The reason for this use case is so that the user may register for a new account on the system. This is useful because it allows them to save their budget, making future changes easier. The outcome will be adding the user to the underlying database and allowing them budget their traveling.|
| **Trigger:**           | The trigger for this event will be the user entering a username and password to create an account on the appropriate page.|
| **Preconditions:**     | 1. User will not already have an account with their desired username. |
| **Postconditions:**    | 1. User has an account created and registered. <br> 2. User is notified that this process was successful and prompts them to login. <br> <br> If unsuccessful: <br> 1. User account is not created. <br> 2. User is notified of what the error is regarding their entry.|
| **Normal Flow:**       | 1. User enters their desired username. <br> 2. User enters their desired password. <br> 3. Check if the username and password meet required credentials as specified. <br> 4. Register the new user. |
| **Alternative Flows:** | 3a. In step 3 of normal flow, the user entries does not meet the specified criteria. <br> 1. The user is notified that they must fulfill the criteria specified for the password. <br> 2. The use case restarts and awaits another attempt to register. <br> <br> 4a. In step 4 of normal flow, if user does not enter any text. <br> 1. The system will alert the user that they must populate the fields. <br> 2. Use case restarts and awaits another user attempt. <br> <br> 4b. In step 4 of the normal flow, if an account with this name already exists <br> 1. Notify the user that this username is already taken. <br> 2. Use case restarts and awaits another user attempt. |
| **Exceptions:**        | 4a. In step 4 of the normal flow, if the database is not initialized <br> 1. The registration will not be completed. <br> 2. An error will be presented, alerting host machine of this issue. <br> 3. Use case must abort until error is corrected by host |
| **Includes:** | This use case will not call other use cases. |
| **Frequency of Use:** | This use case will be executed only once per new user. |
| **Special Requirements:** | The username and password will need to be checked for special characters and criteria specified in this SRS. |
| **Assumptions:** | The assumptions made are that the user is entering English text. |
| **Notes and Issues:** | As of creating this use case there are no details; TBD. | 

<br> 

## User Login
|                             |                                                |
|--------------------------------------|------------------------------------------------|
| **Use Case ID:**       | UC-3.3.2 |
| **Use Case Name:**     | User Login |
| **Created By:**        | Henry Uz  | 
| **Last Updated By:**    | Henry Uz |
| **Date Created:**      | 2/12/2024 | 
| **Last Revision Date:** | 2/12/2024 |
| **Actors:**            | The primary actor will be the end user.|
| **Description:**       | The reason for this use case is so that the user may access their existing account. This is useful because it allows them to access their budget, making future changes easier. |
| **Trigger:**           | The trigger for this event will be the user running the program. |
| **Preconditions:**     | 1. User will not already have an account with their desired username. |
| **Postconditions:**    | 1. User successfully logs in. 2. User is shown the home page displaying all existing trips. <br> <br> If unsuccessful: <br> 1. User is not logged in. <br> 2. User is notified of what the error is regarding their entry.|
| **Normal Flow:**       | 1. User enters their username. 2. User enters their password. 3. User clicks "Login" button. 4. User is taken to the home page.|
| **Alternative Flows:** | 3a. In step 3 of normal flow, the username does not exist in the system. <br> 1. The user is notified that they have inputted a nonexistent username. <br><br> 3b. In step 3 of normal flow, the username exists but their password is incorrect. <br> 1. The user is notified that the password is incorrect. <br> |
| **Exceptions:**        | None |
| **Includes:** | This use case will not call other use cases.|
| **Frequency of Use:** | This use case will be executed once for every time a user initiates a session. |
| **Special Requirements:** | None |
| **Notes and Issues:** | As of creating this use case there are no details; TBD. | 

<br>

## Create Budget
|                             |                                                |
|--------------------------------------|------------------------------------------------|
| **Use Case ID:**       | UC-3.3.3 |
| **Use Case Name:**     | Create Budget |
| **Created By:**        | Henry Uz  | 
| **Last Updated By:**    | Henry Uz |
| **Date Created:**      | 2/12/2024 | 
| **Last Revision Date:** | 2/12/2024 |
| **Actors:**            | The primary actor will be the end user.|
| **Description:**       | This is the primary function of the program. The user will input their budget and add expenses, allowing them to see all important financial data related to their trip in one place. |
| **Trigger:**           | The trigger for this event will be the user pressing "Create Budget" on the home page. |
| **Preconditions:**     | 1. User has successfully logged in to their account. |
| **Postconditions:**    | 1. Budget has successfully been created 2. Budget will now show on the home page|
| **Normal Flow:**       | 1. User will click "Create Budget" 2. User will be taken to a page to list their trip name and budget 3. User will select next and enter their expenses 4. User will select "Save" when complete |
| **Alternative Flows:** | 1. User will click "Create Budget" 2a. User clicks the arrow buttons to change previously submitted info 2b. User clicks "Cancel" to return to the home page without saving the trip|
| **Exceptions:**        | User's budget is <= 0 |
| **Includes:** | This use case will not call other use cases. |
| **Frequency of Use:** | Likely medium-high use (at the discretion of the user)|
| **Special Requirements:** | None |
| **Notes and Issues:** | As of creating this use case there are no details; TBD. | 

<br>

## Edit Budget
|                             |                                                |
|--------------------------------------|------------------------------------------------|
| **Use Case ID:**       | UC-3.3.4 |
| **Use Case Name:**     | Edit Budget |
| **Created By:**        | Henry Uz  | 
| **Last Updated By:**    | Henry Uz |
| **Date Created:**      | 2/12/2024 | 
| **Last Revision Date:** | 2/12/2024 |
| **Actors:**            | The primary actor will be the end user.|
| **Description:**       | The purpose of this use case is to allow the user to edit the budget and/or expenses of an existing trip.  |
| **Trigger:**           | The trigger for this event will be the user selecting the "Edit Budget" button. |
| **Preconditions:**     | 1. User has successfully logged in to their account. 1. User has selected an existing trip. |
| **Postconditions:**    |1. Changes to the budget are saved to the system|
| **Normal Flow:**       |1. User selects the "Edit Budget" button 2. User makes desired changes and uses arrow buttons to navigate between pages 3. User clicks "Save Changes" to finalize edits|
| **Alternative Flows:** |1. User selects the "Edit Budget" button 2. User clicks "Cancel" to return to the home page without saving edits|
| **Exceptions:**        | User's budget is <= 0  |
| **Includes:** | This use case will not call other use cases. |
| **Frequency of Use:** |Likely low-medium use (at the discretion of the user) |
| **Special Requirements:** | None |
| **Notes and Issues:** | As of creating this use case there are no details; TBD. | 

## Manage Settings
|                             |                                                |
|--------------------------------------|------------------------------------------------|
| **Use Case ID:**       | UC-3.3.5 |
| **Use Case Name:**     | Manage Settings |
| **Created By:**        | Henry Uz  | 
| **Last Updated By:**    | Henry Uz |
| **Date Created:**      | 2/12/2024 | 
| **Last Revision Date:** | 2/12/2024 |
| **Actors:**            | The primary actor will be the end user.|
| **Description:**       | This use case allows the user to edit the program settings. One example is changing the graph type output on the budget report. |
| **Trigger:**           | The trigger for this event will be the user pressing the "Settings" button. |
| **Preconditions:**     | 1. User has successfully logged in to their account.  |
| **Postconditions:**    |  1. User is shown the settings page <br> 2. If user changes settings and selects "Save Changes" button, the settings are changed <br> 2a. If the user selects the "Exit" button, no changes are made to the settings.  <br> 3. The user is returned to the home page. |
| **Normal Flow:**       | 1. User selects the "Settings" button 2. User changes the desired settings 3. User selects the "Save Changes" button |
| **Alternative Flows:** | User views settings: 1. User selects the "Settings" button 2. User selects the "Exit" button <br> User changes settings but does not save them: 1. User selects the "Settings" button 2. User changes the desired settings 3. User selects the "Exit" button|
| **Exceptions:**        | None |
| **Includes:** | This use case will not call other use cases. |
| **Frequency of Use:** | Likely low use (at the discretion of the user) |
| **Special Requirements:** | None |
| **Notes and Issues:** | As of creating this use case there are no details; TBD. | 

<br>

## Download Budget Report
|                             |                                                |
|--------------------------------------|------------------------------------------------|
| **Use Case ID:**       | UC-3.3.6 |
| **Use Case Name:**     | Download Budget Report |
| **Created By:**        | Henry Uz  | 
| **Last Updated By:**    | Henry Uz |
| **Date Created:**      | 2/12/2024 | 
| **Last Revision Date:** | 2/12/2024 |
| **Actors:**            | The primary actor will be the end user.|
| **Description:**       | The purpose of this use case is to allow the user to export the budget report. This would be useful for having quick access to the report or sending it to someone. |
| **Trigger:**           | The trigger for this event will be the user pressing the "Download Budget Report" button.|
| **Preconditions:**     | 1. User has successfully logged in to their account. 2. User has saved at least one trip. |
| **Postconditions:**    | 1. User successfully downloads the trip's budget report |
| **Normal Flow:**       | 1. User selects a trip from the home page. 2. User presses the "Download Budget Report" button.|
| **Alternative Flows:** | None |
| **Exceptions:**        | None |
| **Includes:** | This use case will not call other use cases. |
| **Frequency of Use:** |Likely medium-high use (at the discretion of the user) |
| **Special Requirements:** | None |
| **Notes and Issues:** | As of creating this use case there are no details; TBD. | 

<br>
<br>
<br>

# Classes and Objects
## User
**Attributes:** Username, email, password, notification preferences <br>
**Behaviors:** Register, login, update profile, change password, manage settings
## Expense
**Attributes:** Date, amount, category, description, currency <br>
**Behaviors:** Add, update, delete
## Budget
**Attributes:** Overall budget, budget allocations for expense categories <br>
**Behaviors:** Set overall budget, allocate budget for expense categories, update budget
## Settings
**Attributes:** User settings <br>
**Behaviors:** Update profile
## Notification
**Attributes:** Notification type, content <br>
**Behaviors:** Send message
## CurrencyCoverter
**Attributes:** Exchange rates <br>
**Behaviors:** Convert between currencies
