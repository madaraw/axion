# Axion Task Management App

Axion is a task management app built using Vue 3, Nuxt 3, Tailwind CSS, and powered by Back4App. It allows users to efficiently manage their tasks with a focus on simplicity and usability.

## Features

1. **Task Creation and Management:** Users can easily create, edit, and delete tasks.
2. **Task Lists:** Axion provides task lists for today and upcoming days, helping users stay organized.
3. **User Authentication:** Secure account creation, login, and logout functionality for individual task management.

## Technology Stack

- **Frontend Framework:** Vue 3 and Nuxt 3 for a robust Single Page Application with Server-Side Rendering (SSR).
- **UI Styling:** Tailwind CSS for a clean and responsive user interface.
- **Database:** Back4App is used as the database backend, and the app interacts with it through the REST API.

## Installation

To run Axion locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/madaraw/axion.git
   cd axion
3. Install dependencies using your preferred package manager:
   
   ```sh
   # Using yarn
    yarn install

   # Using npm
    npm install

   # Using pnpm
    pnpm install
   
4. Create a .env file and set the following environment variables with your Back4App credentials:

   ```env
   BACK4APP_ID=your-back4app-app-id
   BACK4APP_REST_KEY=your-back4app-rest-key

5. Start the development server:
   
   ```sh
   # Using yarn
    yarn dev

   # Using npm
    npm dev

   # Using pnpm
    pnpm dev

## Demo

Explore a live demo of Axion here: [Axion Demo](https://axion-pjxqzi7b7-walidrachedi-evercamio.vercel.app/)

## Usage

1. Create an account to get started.
2. Once logged in, use the top navbar to create tasks.
3. You can edit your tasks by clicking on them and delete them by marking them as done using the checkbox.

## Authentication

Axion provides user authentication with login and logout functionality to ensure the security of your tasks.

## Deployment

Axion is deployed using Vercel, making it easy to access and use the app in a production environment.

If there are any bugs feel free to reach out to me at rachediwalid@yahoo.fr
