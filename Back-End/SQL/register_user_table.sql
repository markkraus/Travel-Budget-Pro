/* Table to store User's username, 
 * password, and email address when registered.
*/
CREATE TABLE users
(
  id INT PRIMARY KEY IDENTITY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(100) NOT NULL
);
