# School Management API

## Overview
This project provides a set of RESTful APIs to manage school data. It includes functionality to add new schools and retrieve a list of schools sorted by proximity to a user's location.

## Technologies Used
- Node.js
- Express.js
- MySQL
- Postman for API testing

## Features

- **Add School:** Add a new school with its name, address, latitude, and longitude.
- **List Schools:** Get a list of all schools, sorted by how close they are to a specified location.

## Postman Collection
A Postman collection is provided to easily test the APIs. You can import the collection by downloading it [here](./postman/school_management.postman_collection.json)

## Hosting
The API is hosted on Render. You can access the live API at: [here](https://school-management-api-6leu.onrender.com)
## Prerequisites

- **Node.js**: Install Node.js
- **MySQL**: Install MySQL and set up a database.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/School_Management_API.git
cd  school_management-api
```

### 2.Install Dependencies

```bash
npm install
```
### 3.Set Up MySQL Database
 Create a new MySQL database:

 ```bash
CREATE DATABASE school_management_system;
CREATE TABLE school_management_system (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

### 4.Run the Server
 ```bash
node server.js
```

## API Endpoints

### 1. Add School

- **Endpoint**: `/api/addSchool`
- **Method**: `POST`
- **Description**: Adds a new school to the database.
- **Request Payload**:

    ```json
    {
        "name": "Green Valley School",
        "address": "123 Green St, Springfield",
        "latitude": 40.730610,
        "longitude": -73.935242
    }
    ```

- **Response**:

    ```json
    {
        "message": "School added successfully"
    }
    ```

### 2. List Schools

- **Endpoint**: `/api/listSchools`
- **Method**: `GET`
- **Description**: Retrieves a list of all schools, sorted by proximity to the user's location.
- **Query Parameters**:
  - `latitude`: User's latitude.
  - `longitude`: User's longitude.
- **Example Request**:

    ```url
   https://school-management-api-6leu.onrender.com/api/listSchools?latitude=300.7128&longitude=444.0060
    ```

- **Response**:

    ```json
    [
        {
        "id": 2,
        "name": "VIT International School",
        "address": "Kothrud Pune",
        "latitude": 300,
        "longitude": -934.01
    },
    {
        "id": 3,
        "name": "VIT International School",
        "address": "Kothrud Pune",
        "latitude": 300,
        "longitude": -934.01
    },
    {
        "id": 1,
        "name": "MIT International School",
        "address": "0101 Pimpri Pune",
        "latitude": 310.71,
        "longitude": -914.01
    }
    ]
    ```
