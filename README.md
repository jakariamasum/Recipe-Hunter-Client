# Recipe Hunter

This project is a simple Full-stack Recipe Sharing system built using ReactJS (Front-End), MongoDB + ExpressJS (BackEnd), and Firebase (Authentication). The system allows users to view, add, and purchase recipes, with features such as user registration, recipe details, coin purchases, and more.

## Features

- **User Authentication:** Users can register and log in using Google Authentication via Firebase.
- **User Registration Bonus:** Users receive 50 coins upon successful registration.
- **Recipe Viewing:** Users can view recipes available on the platform.
- **Recipe Addition:** Registered users can add recipes to the system and earn 1 coin for each recipe added.
- **Recipe Details:** Users can view detailed information about each recipe, including embedded YouTube videos.
- **Coin Purchases:** Users can purchase coins using real currency to unlock recipe details.
- **Security:** API endpoints are secured using JWT Token-based authorization for logged-in users.

## Layout

The website follows a one-column layout with the following components:

- **Navbar:** Displays website name/logo and navigation options based on user authentication status.
- **Routes:** Route-based rendering for different sections of the website.
- **Footer:** Contains author information and links to social profiles.

## Pages

### Home Page

- **Banner:** An attractive section with buttons to view recipes and add recipes.
- **Success Stories:** Showcase recipe and user counts with counter animations.
- **Dev Info:** Information about the developer, including educational background and experience.

### Login and Registration

- Users can log in and register using Google Authentication.
- User information is stored in the database upon successful registration.

### Add Recipes

- Private route for adding recipes.
- Form to add recipe details, including image, video, country, and category.

### All Recipes

- Public route to view all recipes.
- Displays basic information about each recipe and a button to view recipe details.

### Recipe Detail

- Private route to view detailed information about a recipe.
- Displays recipe details, embedded YouTube video, and reaction system for logged-in users.

## Utilities

- **Filtering System:** Filters recipes by category and country.
- **Search System:** Enables searching for recipes by title.

- **Suggestion System:** Suggests related recipes based on category or country on the recipe detail page.
