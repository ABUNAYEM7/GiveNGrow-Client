# Give & GROW

## Live Link
[Visit the live website](https://give-n-grow.web.app)

**Because of you, we are closer to our goal. Let's continue making a difference.**

## Summary
This is a crowdfunding website where you can contribute to other people's projects and get profit. You can also create your own project, edit it, and delete your project. To access these premium features, you must log in.

## Features
- **User Authentication:** Users can register, log in, and securely access their personal campaigns and donation history.
- **Campaign Management:** Users can create, update, and delete their own campaigns.
- **Donation History:** Users can view the campaigns they have donated to with detailed transaction information.
- **Responsive Design:** The platform is mobile-friendly and adjusts seamlessly across devices.
- **Interactive UI Elements:** Includes interactive components like loading spinners, modals, and a dark/light theme toggle for a dynamic user experience.

## Technologies Used

### Frontend
1. **HTML**
2. **CSS** (Tailwind CSS)
3. **JavaScript**
4. **React**

### Authentication
1. **Firebase**

### Backend
1. **Node.js**
2. **Express.js**
3. **MongoDB**

### NPM Packages Used
1. **React Router v7**
2. **React Marquee**
3. **React Framer-Motion**
4. **React Icons**
5. **SweetAlert2**
6. **React Loader**
7. **React Select**
8. **React Type Animation**
9. **React Slick**
10. **React-awesome-reveal**
11. **React-Lottie**



### How Give & Grow Works
In this section, we use an iframe to show a video where we explain how our plan works.

### How Give & Grow Helps
In this section, we display a marquee where all the campaigns have a shorter description, creating a visually appealing display. In this section, we use the react-awesome-reveal animation package.

### Our Features
In this section, we display the process of our campaign and how much we are famous in the world and how trusted we are.

### How To Use Give & Grow
Here we mention the user manual and describe how people can use our services and how they can achieve their dreams.


## Dependencies

```json
{
  "name": "givengrow",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emotion/react": "^11.13.5",
    "@emotion/styled": "^11.13.5",
    "@mui/material": "^6.1.10",
    "axios": "^1.7.9",
    "firebase": "^11.0.2",
    "framer-motion": "^11.13.1",
    "lottie-react": "^2.4.0",
    "react": "^18.3.1",
    "react-awesome-reveal": "^4.2.14",
    "react-dom": "^18.3.1",
    "react-fast-marquee": "^1.6.5",
    "react-helmet": "^6.1.0",
    "react-icons": "^5.4.0",
    "react-loader-spinner": "^6.1.6",
    "react-responsive-carousel": "^3.2.23",
    "react-router": "^7.0.2",
    "react-select": "^5.8.3",
    "react-slick": "^0.30.2",
    "react-tooltip": "^5.28.0",
    "react-type-animation": "^3.2.0",
    "slick-carousel": "^1.8.1",
    "sweetalert2": "^11.14.5"
  },
  "devDependencies": {
    "@eslint/js": "^9.15.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "daisyui": "^4.12.14",
    "eslint": "^9.15.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.12.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "vite": "^6.0.1"
  }
}

## How to run in local machine

1. **Clone the repository:**

git clone "https://github.com/ABUNAYEM7/GiveNGrow-Client.git"
Navigate to the project folder:

cd give-n-grow
Install dependencies:

npm install
Set up your Firebase credentials:

Create a .env file in the root directory of the project and add the following environment variables:

## Environment Variables

VITE_apiKey=AIzaSyAbNB_rAU0jgZvErKKinDDhyYA3DbJZL58
VITE_authDomain=give-n-grow.firebaseapp.com
VITE_projectId=give-n-grow
VITE_storageBucket=give-n-grow.firebasestorage.app
VITE_messagingSenderId=979195091843
VITE_appId=1:979195091843:web:2862e35d4f57d39a7474b6
Run the development server:


Copy code
npm run dev
Open the browser and go to "http://localhost:3000".