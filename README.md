# SimpleLoginForm
FrontEnd--React
The frontend of the login form is built using React, a popular JavaScript library for creating dynamic and responsive user interfaces. 
It shows input boxes for username and password. When the user fills the form and clicks the login button, the data is sent to the backend. 
React also helps in switching between pages like login, register, and home without reloading the page.

Backend--Nodejs & Express
The backend is created using Node.js with the Express framework. It listens for requests from the frontend, especially the /login and /register routes.
When a user tries to log in, Express checks the credentials against the database. Passwords are securely hashed using bcrypt before storing or comparing them, 
adding an extra layer of security. The server sends back a success or error message, which the frontend uses to respond appropriately.

Database--MongoDB
MongoDB is used to store user details like usernames and passwords. When someone registers, their data is saved in the database.
During login, the backend checks this database to match the user and password. The password is saved in a secure (hidden) way using a method called hashing.


Register Page
![image alt](https://github.com/Gopika-T2103/SimpleLoginForm/blob/main/Registerpage.png)

Login Page
![image alt](https://github.com/Gopika-T2103/SimpleLoginForm/blob/main/Login.png)


Home Page
![image alt](https://github.com/Gopika-T2103/SimpleLoginForm/blob/main/Home.png)
