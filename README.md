[CS1530-Project](#cs1530-project)
  * [Project Proposal](#project-proposal)
  * [Functional Requirements](#functional-requirements)
  * [Nonfunctional Requirements](#nonfunctional-requirements)
  * [Software Interfaces](#software-interfaces)
  * [Use Cases](#use-cases)
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

# Use Cases
- User Registration <br>
- User Login <br>
- Edit Budget <br>
- Manage Settings <br>
- Download Budget Report <br>

![image](https://github.com/Scrum-Team-Six/CS1530-Project/assets/91558299/e3c6c62d-4985-44b9-be02-6270820c62e6) <br>
<br>
<br>
<br>

## User Registration
### User Registration

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

