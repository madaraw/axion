# Axion Task Management App

Axion is a task management app built using <code>Vue 3</code>, <code>Nuxt 3</code>, <code>Tailwind CSS</code>, and powered by Back4App. It allows users to efficiently manage their tasks with a focus on simplicity and usability.
You can use [this link](axion-phi.vercel.app) For a demo. Use username <code>test</code> & password <code>Vue 3</code> to skip the registration.

## Motivation
The primary objective of this project is to acquire proficiency in <code>Vue 3</code> and <code>Nuxt 3</code> by actively exploring their features. The project entails implementing <code>CRUD</code> operations and registration functionalities, leveraging various features such as server-side API calls, <code>Pinia</code> for state management, and the incorporation of middlewares to enforce authentication restrictions.

## Features

1. **Task Creation and Management:** Users can easily create, edit, and delete tasks.
2. **Task Lists:** Axion provides task lists for today and upcoming days, helping users stay organized.
3. **User Authentication:** Secure account creation, login, and logout functionality for individual task management.

## Quick Start

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


## Usage

1. Create an account or use username: test, password: test to login.
 ![Signup page](https://github.com/madaraw/axion/assets/25234193/47eccb90-cf56-4351-bbaf-b3daa04ae04b)

2. Once logged in, use the top navbar to create tasks.
   ![Tasks filled](https://github.com/madaraw/axion/assets/25234193/852670ca-1782-4ac5-8f89-282eb5d8b492)

3. You can edit your tasks by clicking on them and delete them by marking them as done using the checkbox.
   ![Creation form](https://github.com/madaraw/axion/assets/25234193/4a03b5d1-2a36-4d15-9042-b445cc04360d)

If there are any bugs feel free to reach out to me at rachediwalid@yahoo.fr
