![HooBank Logo](./src/assets/logo.svg)

HooBank is a modern, responsive banking website designed to offer an intuitive digital banking experience. Built using React, Vite, and Tailwind CSS, this project focuses on creating an elegant, user-friendly interface for managing finances with ease and security.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Project Structure](#project-structure)
5. [Usage](#usage)
6. [Components Overview](#components-overview)
7. [Styling](#styling)
8. [Available Scripts](#available-scripts)
9. [Deployment](#deployment)
10. [License](#license)
11. [Contact](#contact)

---

## Features

- **Responsive Design**: Optimized for desktop and mobile.
- **Reusable Components**: Built using reusable and well-organized React components.
- **Styled with Tailwind CSS**: Efficient and customizable styling.
- **Optimized Performance**: Fast-loading thanks to Vite's fast bundling.
- **Interactive Navbar**: Responsive menu that toggles on smaller screens.
- **Modern UI Elements**: Includes gradients, animations, and hover effects.

---

## Tech Stack

- **React**: TypeScript library for building user interfaces.
- **Vite**: Fast development environment for modern web applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Modern TypeScript features for clean code.
- **Font Awesome**: Icon library for social media and other icons.

---

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/HD-40307g/bank_modern_app.git
   cd bank_modern_app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the app**:
   Visit `http://localhost:3000` to view the application in development mode.

---

## Project Structure

```plaintext
bank_modern_app/
│
├── public/                     # Public assets and icons
│   └── vite.svg                # App favicon
│
├── src/
│   ├── assets/                 # Images, logos, and icon assets
│   ├── components/             # Reusable UI components
│   ├── constants/              # Static data like navigation links
│   ├── App.tsx                 # Main application component
│   ├── index.css               # Tailwind CSS styling component
│   ├── main.tsx                # Entry point for the app
│   └── style.ts                # Reuseable styling component
│
├── index.html                  # HTML template
├── tailwind.config.cjs          # Tailwind CSS configuration
└── package.json                # Project dependencies and scripts
```

---

## Usage

Once the app is running, you can navigate through the following main sections:

- **Hero Section**: Highlights the app's purpose and main features.
- **Business Section**: Detailed description of the services offered.
- **Stats Section**: Key statistics displayed with eye-catching numbers.
- **Testimonials**: Carousel of user feedback and testimonials.
- **Clients**: List of client logos.
- **CTA (Call to Action)**: Encourages users to take a specific action.
- **Footer**: Includes navigation links and social media icons.

---

## Components Overview

### Navbar

The navigation bar component, responsive with a toggle menu for mobile views.

### Hero

Main introductory section with a call-to-action button.

### Stats

Displays key statistics in a row, with data fetched from the `index.ts` file in constants directory.

### Testimonials

Customer feedback displayed in cards using the `FeedbackCard` component.

### Footer

The footer contains navigation links and social media icons.

---

## Styling

Tailwind CSS is used to style the app for a modern and consistent design. The `style.ts` file exports commonly used styles as TypeScript objects, making it easy to apply predefined styles throughout the components.

### Global Styles

Tailwind utility classes are used globally to maintain a consistent look. Key customizations, such as gradient backgrounds and font settings, are defined in `tailwind.config.cjs`.

### Custom Classes

Reusable custom styles are stored in `styles.ts` and imported into each component where necessary.

---

## Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the app for production in the `dist` folder.
- **`npm run preview`**: Serves the built application locally.

---

## Deployment

To deploy the app, follow these steps:

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Serve the `dist` folder**:
   - Upload the contents of the `dist` folder to your hosting provider or use Vercel/Netlify for automatic deployment.

For detailed instructions on deploying a Vite app, consult the Vite documentation: [https://vitejs.dev/guide/static-deploy.html](https://vitejs.dev/guide/static-deploy.html)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

For inquiries, please reach out:

- **GitHub**: https://github.com/HD-40307g/bank_modern_app.git

---

Thank you for using HooBank! Your feedback and contributions are welcome.
