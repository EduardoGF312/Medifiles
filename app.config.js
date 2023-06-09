import 'dotenv/config';

export default {
  "expo": {
    "name": "Medifiles",
    "slug": "Medifiles",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    // "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "plugins":[
      './plugins/withDisableForcedDarkModeAndroid.js'
    ],
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.natakong.MediFiles"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      "eas": {
        "projectId": "1156f22b-636e-409b-ad8e-a9d1554311cf"
      }
    }
  }
}
