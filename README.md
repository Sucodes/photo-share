# PhotoShare

## Project Overview
PhotoShare is a user-friendly mobile application developed using Ionic React and Capacitor. The application enables users to authenticate, capture photos using the device camera, associate each photo with geographic location data, store/view photos locally on the device and share photos using the native Android sharing interface. All major features were tested within a native Android environment


## Technologies Used

- Ionic Framework (React)

- Capacitor

- TypeScript

- CSS3

- Android Emulator (for testing)

- Google Maps API


## Native Plugins Used

- Camera Plugin to enable native image capture

- GeoLocation Plugin to retrieve device location at runtime

- Filesystem Plugin to temporarily store images in cache for sharing

- Share Plugin that opens the native Android share dialog

- Capacitor Preferences plugin to persist data

- Splash Screen plugin


## How to Run the Application

### Prerequisites

- Node.js (LTS recommended)

- npm

- Ionic CLI
```
npm install -g @ionic/cli

```

- Android Studio

- Android SDK installed

- Android Emulator created and running


### Installation Steps

1. Clone the project folder
```
    git clone https://github.com/Sucodes/photo-share
    cd photo-share
```

2. Install dependencies
```
    npm install
```

3. Build the Ionic application
```
    ionic build
```

4. Sync Capacitor with Android
```
npx cap sync android
```

5. Start an Android Emulator using Android Studio

6. Run the application:
```
npx cap run android
```

7. The app will launch automatically on the emulator