# Letmeask

React application for creating live Q&A rooms.

The project allows users to create rooms, join existing rooms, send questions, like questions and manage room content in real time using Firebase.

## Preview

![Letmeask preview](https://raw.githubusercontent.com/CardosoRepository/Letmeask/master/src/about.png)

## Deploy

Access the application:

https://letmeask-db1a2.web.app

## Features

- Google authentication
- Create Q&A rooms
- Join an existing room by room code
- Send questions in real time
- Like and unlike questions
- Display the number of likes per question
- Admin room page
- Mark questions as answered
- Highlight questions
- Delete questions
- Close rooms
- Copy room code
- Firebase Realtime Database integration
- Firebase Authentication integration
- Responsive interface

## Tech Stack

- React 18
- TypeScript
- SCSS
- React Router DOM
- Firebase Authentication
- Firebase Realtime Database
- Font Awesome
- React Scripts

## Project Structure

```txt
src/
├── assets/
│   └── images/
├── components/
│   ├── Button.tsx
│   ├── Question/
│   └── RoomCode.tsx
├── contexts/
│   └── AuthContext.tsx
├── hooks/
│   ├── useAuth.ts
│   └── useRoom.ts
├── pages/
│   ├── AdminRoom.tsx
│   ├── Home.tsx
│   ├── NewRoom.tsx
│   └── Room.tsx
├── services/
│   └── firebase.ts
├── styles/
├── App.tsx
└── index.js
```

## Main Pages

### Home

Initial page where users can sign in with Google, create a new room or join an existing room by entering a room code.

### NewRoom

Page used to create a new Q&A room.

### Room

Public room page where authenticated users can send questions and like existing questions.

### AdminRoom

Admin page used to manage questions, mark them as answered, highlight them, delete them and close the room.

## Firebase Configuration

The project uses environment variables to configure Firebase.

Create a `.env` file in the project root with the following variables:

```env
REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_DATABASE_URL=your_database_url
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
```

These values are read in:

```txt
src/services/firebase.ts
```

## Getting Started

### Prerequisites

- Node.js
- npm
- Firebase project configured with Authentication and Realtime Database

### Clone the repository

```bash
git clone https://github.com/CardosoRepository/Letmeask.git
```

### Navigate to the project folder

```bash
cd Letmeask
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file based on the Firebase variables listed above.

### Run the development server

```bash
npm start
```

Open the application at:

```txt
http://localhost:3000
```

## Available Scripts

```bash
npm start
```

Runs the application in development mode.

```bash
npm run build
```

Builds the application for production.

```bash
npm test
```

Runs the test runner.

```bash
npm run eject
```

Ejects the Create React App configuration.

## Firebase Rules

The repository includes a `database.rules.json` file for Firebase Realtime Database rules.

Before deploying or using the application with a different Firebase project, review the database rules and adjust them according to the intended access control.

## Notes

- Authentication is handled with Google login through Firebase Authentication.
- Questions and rooms are stored in Firebase Realtime Database.
- Room updates happen in real time.
- The admin page allows room moderation actions.
- The Firebase client configuration is loaded from environment variables.

## Future Improvements

- Add visual loading states
- Add toast notifications for user feedback
- Add route protection for admin rooms based on the room author
- Improve accessibility for buttons and interactive icons
- Add automated tests for hooks and pages
- Add user logout button
- Add room sharing improvements

