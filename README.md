 Student Portal Web Application

Overview

This project is a full-stack web application designed for educational institutions. 
It provides personalized content to students based on their college classification (e.g., Freshman, Sophomore, Junior, Senior). 
The application features secure authentication and is containerized using Docker, with MongoDB as the backend database for storing user data and academic content.

 Features

- User Authentication**: Secure login mechanism to ensure that only registered students can access personalized information.
- Dynamic Content Delivery**: Based on the student's classification, the application dynamically presents relevant academic content, including courses, reading materials, and extracurricular activities.
- Docker Integration**: Simplifies deployment and ensures consistency across different environments using Docker containers.
- MongoDB Database**: Utilizes MongoDB to store and retrieve user and content data efficiently.

Prerequisites

Before you can run this application, you need the following installed on your system:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Optionally, [MongoDB Compass](https://www.mongodb.com/products/compass) for visual database management.

 Accessing the Application**
   Once the containers are running, the application can be accessed at:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:5000](http://localhost:5000)
     
 Usage
- Register/Login**: Students must register and log in to access personalized content.
- Navigation**: After logging in, students can navigate through different sections such as Courses,
- Recommended Books, and Clubs based on their year of study.



License

Distributed under the MIT License. See `LICENSE` for more information.
