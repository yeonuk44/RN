# RN
React-Native practice &amp; environment

## Requirement
- NODE.JS
- React Native
- React Navigation

## First Step
- expo cli install
### before install 'Node.js'
https://nodejs.org/ko/download/

### expo cli install command
npm install -g expo-cli

## Second Step
- Configure app.json
 {
   "expo": {
    "name": "Your App Name",
    "icon": "./path/to/your/app-icon.png",
    "version": "1.0.0",
    "slug": "your-app-slug",
    "sdkVersion": "XX.0.0",
    "ios": {
      "bundleIdentifier": "com.yourcompany.yourappname",
      "buildNumber": "1.0.0"
    },
    "android": {
      "package": "com.yourcompany.yourappname",
      "versionCode": 1
    }
   }
 }

ios.buildNumber and android.versionCode distinguish different binaries of your app. Make sure to increment these for each build you upload to the App Store or Google Play store.

## Third Step
- There is a similar command in react-native like create-react-app.
- expo init 'projectName'
- cd 'projectname'
- yarn add react-navigation
- expo start

after Choose a template
### 1. blank 
This template creates a project that is empty and has only one page.

### 2. tabs
It's a template with multiple pages created via react-navigation


#### Reference page 
- https://docs.expo.io/versions/v36.0.0/distribution/building-standalone-apps/
