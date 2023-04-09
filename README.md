# Where is Waldo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Firebase setup
[Steps to Add Firebase](https://firebase.google.com/docs/web/setup)

## Firebase hosting
1. Install firebase tools
`npm -g install firebase-tools`
2. Build project
`npm run build`
3. Init firebase
`firebase init`

* Select `Hosting: Configure files for Firebase Hosting`

* Select `Use an existing project`

* Other questions:

```
What do you want to use as your public directory? build
Configure as a single-page app (rewrite all urls to /index.html)? Yes
Set up automatic builds and deploys with GitHub? No
File build/index.html already exists. Overwrite? No
```

* `.firebaserc` and `firebase.json` will be generated

4. deploy app
`firebase deploy`
