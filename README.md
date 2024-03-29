<br />
<p align="center">
  <div align="center">
    <img height="150" src="./docs/readme/logo.svg" alt="hirejob" border="0"/>
  </div>
  <h3 align="center">Hirejob (Hiring App)</h3>
  <p align="center">
    <a href="https://github.com/alifankebima/hirejob-frontend"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://hirejob-frontend-alifankebima.vercel.app">View Demo</a>
    ·
    <a href="https://hirejob-backend-production-c841.up.railway.app">Api Demo</a>
  </p>
</p>

## Table of Contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Screenshots](#screenshots)
- [Related Project](#related-project)

# About The Project

Hirejob is a hiring website to make it easier to connect workers with recruiters. Workers can create an account and display portfolios, work experiences, and skills on this website. Recruiters can create an account for searching and hiring workers based on company needs. Workers will be notified if they are hired by recruiter.

## Built With

These are the libraries and service used for building this backend API

- [NextJS](https://nextjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [React-icons](https://react-icons.github.io/react-icons/)
- [Axios](https://axios-http.com)
- [Sweetalert2](https://sweetalert2.github.io)

# Getting Started

## Prerequisites

You'll need these programs installed before proceeding to installation

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download)

This project requires [hirejob-backend](https://github.com/alifankebima/hirejob-backend) to function properly, follow the steps provided in the readme to install and run the backend API

## Installation

Follow this steps to run the server locally

1. Clone this repository

```sh
git clone https://github.com/alifankebima/hirejob-frontend.git
```

2. Change directory to hirejob-frontend

```sh
cd hirejob-frontend
```

3. Install all of the required modules

```sh
npm install
```

4. Create and configure `.env.local` file in the root directory, example env are provided in [.env.local.example](./.env.local.example)

```env
NEXT_PUBLIC_API_URL=[ Backend URL ]
```

5. Run this command to run the server in development environment

```sh
npm run start
```

- Run this command to build this website into production ready

```sh
npm run build
```

# Screenshots

<table>
 <tr>
    <td><img width="350px" src="./docs/readme/login.png" border="0" alt="Login" /></td>
    <td> <img width="350px" src="./docs/readme/register.png" border="0"  alt="Register" /></td>
  </tr>
  <tr>
    <td>Login</td>
    <td>Register</td>
  </tr>
  <tr>
    <td><img width="350px" src="./docs/readme/home-page.png" border="0" alt="Home Page" /></td>
    <td><img width="350px" src="./docs/readme/worker-list.png" border="0" alt="Worker List" /> </td>
  </tr>
   <tr>
    <td>Home Page</td>
    <td>Worker List</td>
  </tr>
  <tr>
    <td><img width="350px" src="./docs/readme/portfolio.png" border="0" alt="Portfolio" /></td>
    <td><img width="350px" src="./docs/readme/work-experience.png" border="0" alt="Work Experience" /> </td>
  </tr>
   <tr>
    <td>Worker Profile - Portfolio</td>
    <td>Worker Profile - Work Experience</td>
  </tr>
    <tr>
    <td><img width="350px" src="./docs/readme/hire.png" border="0" alt="Hire Worker" /></td>
    <td><img width="350px" src="./docs/readme/notification.png" border="0" alt="Notification" /> </td>
  </tr>
   <tr>
    <td>Worker Profile - Hire Worker</td>
    <td>Notification</td>
  </tr>
</table>

# Related Project

:rocket: [`Frontend Hirejob`](https://github.com/alifankebima/hirejob-frontend)

:rocket: [`Backend Hirejob`](https://github.com/alifankebima/hirejob-backend)

:rocket: [`Demo Hirejob`](https://hirejob-frontend-alifankebima.vercel.app)
