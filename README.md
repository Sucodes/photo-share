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


4. Application Features
4.1 Authentication

Authentication landing page shown on app launch

User Sign Up and Login functionality

Authentication state stored locally

Logout functionality that clears session data

Authentication is handled locally using Capacitor Preferences. No backend server or external authentication service is required.

4.2 Camera Functionality

Implemented using the Capacitor Camera plugin

Users can capture photos using the device camera

Photos are previewed immediately after capture

Each photo is saved locally within the application

4.3 Location Functionality

Implemented using the Capacitor Geolocation plugin

The application retrieves the user’s latitude and longitude when a photo is taken

Location data is stored alongside each photo

Location access is requested at runtime, in line with Android permission requirements

The inclusion of location data adds contextual meaning to photos and demonstrates access to native device features that are not reliably available in standard web applications.

4.4 Photo Gallery

Displays all photos saved by the user

Each photo includes:

Image preview

Date and time captured

Location coordinates (if available)

Users can delete photos individually

Pull-to-refresh functionality is provided to reload stored photos

4.5 Photo Sharing

Photos can be shared using the device’s native sharing interface

Implemented using:

Capacitor Filesystem (to write images to cache)

Capacitor Share plugin (to open the native share sheet)

Photos are temporarily written to the device cache as files and shared via a file URI

Users can share photos via messaging, email, or social applications that use contacts

This approach follows modern Android development practices and avoids direct access to contact data.

## Native Plugins Used

The application integrates the following Capacitor plugins:

- Camera Plugin to enable native image capture

- Geolocation Plugin to retrieve device location at runtime

- Filesystem Plugin to temporarily store images in cache for sharing

- Share Plugin that opens the native Android share dialog

- Capacitor Preferences plugin to persist data

- Splash Screen plugin


9. Deployment and Testing

The application was built and deployed using Capacitor



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