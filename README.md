# Employee Management Frontend

## Overview

The Employee Management Frontend is a single-page application (SPA) built using Angular. It provides a user-friendly interface for managing employee data, supporting CRUD (Create, Read, Update, Delete) operations by communicating with the Employee Management API.

## Key Features

- **Employee List**: Display all employees with basic information.
- **Employee Details**: View detailed information about a specific employee.
- **Add Employee**: Form to create a new employee record.
- **Edit Employee**: Form to update existing employee details.
- **Delete Employee**: Functionality to remove an employee.

## Technologies Used

- **Angular**: Frontend framework for building the SPA.
- **Angular Material**: UI component library for responsive design.
- **TypeScript**: Superset of JavaScript adding static types.
- **HTML5 & CSS3**: Markup and styling for the application.

## Project Structure

### Components

- **EmployeeListComponent**: Displays a list of employees.
- **EmployeeDetailComponent**: Shows detailed information for a specific employee.
- **EmployeeFormComponent**: Form for creating and editing employees.

### Services

- **EmployeeService**: Handles communication with the Employee Management API, including methods for fetching, creating, updating, and deleting employees.

### Routing

- **AppRoutingModule**: Configures routes for the application, mapping URL paths to components.
