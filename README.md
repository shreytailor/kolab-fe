<div align="center">
    <img alt="kolab-logo" src="./resources/logo.png" width="100px" />
    <br/>
    <b>Kolab Frontend Documentation</b>
    <br/>
    <img alt="build:passing" src="https://img.shields.io/badge/Build-Passing-brightgreen">
    <img alt="licence:mit" src="https://img.shields.io/badge/Licence-MIT-9cf">
    <img alt="types:typescript" src="https://img.shields.io/badge/Types-Typescript-important">
</div>
<br>
<a href="https://kolab17.azurewebsites.net">Click here</a> to view the live deployment of the application.

#### Table of Contents
1. [Project Brief](#project-brief)
2. [Design Decisions](#design-decisions)
    - [Color Palette](#color-palette)
    - [Font Choice](#font-choice)
3. [Accessibility](#accessbility)
4. [Testing](#testing)
5. [Responsive UI](#responsive-ui)
6. [Usage](#usage)
7. [Quick Links](#quick-links)
8. [License](#licence)

## Project Brief
Kolab is a collaboration platform for students where they can anonymously ask questions to their peers. It follows a forum based approach as one is able to post, and also leave followups.

The application is powered by React in the frontend, Node.js in the backend, and MySQL database is used to store everything relating to the forum data.

On a platform where you can maintain anonymity, good security is essential. Therefore, students must use Google authorization to gain access into their portal.

## Design Decisions
### Color Palette
The ultimate focus on the first day of development was to choose the correct colors, as this would be an excellent start to start creating assets for our application.

The primary color for the whole appliction was chosen to be Blue, as it represents confidence and intelligence of the students. One of the other consideration was Orange, but it wasn't used because there wasn't enough contrast against White.

Variations of Gray are used across components throughout the application to promote the sense of simplicity. This plainness of the interface would ensure that there is no visual disturbance for students.

Below are the most commonly used colors through out the application.

<div align="center">
    <img alt="color-scheme" src="./resources/scheme.png" width="500px">
</div>

### Font Choice
Since this website is educational, our font must be such that it is calmer and easier to read. Despite all this, it should be able to invoke visual interest within students as well. [Kumbh Sans](https://fonts.google.com/specimen/Kumbh+Sans) was chosen in the end because I thought it provides a very good balance between the both.

This is used throughout the application to keep things consistent.

## Accessbility
There were lots of features added to this application, in order to make it as accessible as possible for the users. Some of them are listed below.

- Alternative texts placed for images, graphics, emojis.
- Foreground and background colors were chosen carefully to avoid any contrast issues.
- The headings are correctly used on all pages. The largest used for the title of the page, then going to H2, H3 etc.
- Good card layout used for displaying the individual question, rather than tabulating the data.
- Ability to speak the questions for the people who have problems reading large pieces of text.

## Testing
Testing on the front-end was done primarily using the notion of *Snapshot Testing*. It was used in the form of regression testing using technologies such as [Jest](https://jestjs.io/) (testing framework for JavaScript).

Note that my application is made up of small components which make up some larger component (individual pages). This is important to know to understand how testing was performed for my application.

- When satisfied with a simple component, a snapshot would be created for it - it would act like a reference.
- Now after the addition of other smaller components, we run the tests to see if the older components were modified in some way.
- If yes, then confirm whether this was intended or not. This is why it makes sense to call it a form of *regression* testing.

It was a very unique and humbling experience for me because I have always wondered how testing works when dealing with user interfaces.

## Responsive UI
In this day and age, it's important to provide support for all sizes of screens, whether a large monitor or a small phone. In fact, it is more important to have support for smaller screens because people don't browse the web on computers that much anymore.

The application has been vigorously tested on devices such as Note 9, iPad Pro, MacBook Pro and a 24' monitor to make sure that all possible user bases are covered.

## Usage
Clone this repository in the directory of your choice, and then run `npm install` to install all its dependencies. 

This application uses the *Google OAuth2* authentication, and hence you will need to generate a client identifier from <a href="https://console.developers.google.com/">here</a>. To store this, create an `.env` file within the root of your React project directory with the following structure.

```
REACT_APP_CLIENT_ID=<insert your identifiier here>
```

Once this process is completed, you can run `npm start` to start the application. You will then be able to access it on `localhost:3000`.

## Quick Links
- <a href="https://www.typescriptlang.org/docs/handbook/react.html">Handbook - React - Typescript</a>
- <a href="https://reactjs.org/">React Documentation</a>
- <a href="https://www.npmjs.com/package/react-google-login">react-google-login</a>

## Licence
> You can check out the full licence <a href="./LICENSE">here</a>.

This project is licensed under the terms of the MIT Licence.