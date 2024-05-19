# Blog Web App

This is a capstone project from Angela Yu's Full Stack Developer Course. The Blog Web App is a full-featured blogging platform where users can navigate through the home, blog, and contact pages, create new blog posts, and enjoy a fully responsive design.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Home Page**: A welcoming landing page with an intuitive design.
- **Blog Page**: Users can create new blog posts which are displayed immediately after submission.
- **Contact Page**: A simple page for users to get in touch.
- **Responsive Design**: Both the navigation bar and footer are fully responsive, ensuring a smooth experience on any device.

## Technologies Used

- HTML
- CSS
- jQuery
- JavaScript
- EJS (Embedded JavaScript templates)
- Express
- Node.js

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MercySpectures/BlogWebApp.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd BlogWebApp
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the server:**
   ```bash
   npm start
   ```
   or (if you have nodemon installed)
   ```bash
   nodemon index.js
   ```
6. **Open your browser and go to:**
   ```
   http://localhost:3000
   ```

## Usage

- **Home Page**: Navigate to the home page to see the welcome message.
- **Blog Page**: Click on the "Create" button to add a new blog post. Fill in the details and submit to see the post appear on the blog section.
- **Contact Page**: Use this page to understand how users can contact the blog administrators.

## Project Structure

```
BlogWebApp/
│
├── public/
│   ├── images/
|      ├──contact.jpg
|      ├──contact.webp
|      └──Designer.png
│   └── styles/
|      └──style.css
│
├── views/
|     ├── index.ejs
│     ├── blog.ejs
│     └── contact.ejs
│   └── partials/
|     ├── footer.ejs
│     ├── header.ejs
│     
├── index.js
├── package.json
└── README.md
```

- **public/**: Contains static assets like CSS and images.
- **views/**: Contains EJS templates for the home, blog, contact, footer and header pages.
- **index.js**: The main entry point of the application.
- **package.json**: Lists dependencies and scripts for the project.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please create an issue or submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
