# React Native - My walkthrough

## Project Init from blank template

`npx create-expo-app@latest ./ --template blank@latest` or `npx create-expo-app ./`

```cmd
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

Edit "main" key value in package.json to "expo-router/entry" => `"main": "expo-router/entry",`.

Copy content of App.js, delete this file and create folder "app", there create file "_layout.jsx" and paste previously copied content.

Go to app.json, under key "slug" add `"scheme": "app-name"` and optionally edit values of keys "name" and "slug".

```cmd
npx expo start -c
```

Copy content of app/_layout.tsx to new file app/index.jsx.

In app/_layout.tsx delete all and type `rnfes`.

## Install NativeWind

Follow this documentation [NativeWind QuickStart Expo](https://www.nativewind.dev/quick-starts/expo#1-create-the-project)

## Appwrite

PackageName: com.jsm.aora.course

### Install the Appwrite SDK for React Native and required dependencies

```cmd
npx expo install react-native-appwrite react-native-url-polyfill
```

### Initialize your SDK

```JavaScript
import { Client } from 'react-native-appwrite';
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint('<http://localhost/v1>') // Your Appwrite Endpoint
    .setProject('455x34dfkj') // Your project ID
    .setPlatform('com.example.myappwriteapp') // Your application ID or bundle ID.
;
```
