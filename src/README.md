# Morehouse Computer Science Student Portal

## Description
This web application is specifically designed for Morehouse College Computer Science students. It facilitates user authentication and integrates a MongoDB database to provide personalized resources and information for students from freshmen to seniors.

## Features
- User authentication system with login and registration functionalities.
- Personalized content based on the user's academic year:
  - Freshman Year: Introduction to Computer Science resources, recommended courses, and extracurricular activities.
  - Sophomore Year: Guides on Data Structures, Algorithms, and relevant mathematical courses.
  - Junior Year: Advanced topics including Operating Systems, Database Systems, and Software Engineering.
  - Senior Year: Specialization courses, Capstone Project resources, and career preparation tools.

## Installation
Clone the project repository and install the dependencies to set up the local development environment.

```bash
git clone https://github.com/yourusername/morehouse-student-portal.git
cd morehouse-student-portal
npm install

This command will start the project: npm start 
Also, to run server, run this command: node server.js 


Technologies Used listed below:
Frontend: React
Backend: Express, Node.js
Database: MongoDB Atlas (database used for this project)
Authentication: Encrypted user authentication
Other Tools: Docker (for containerization)