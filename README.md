# pwa Sample
## get start
create "firebaseConfig.js"
```
const authConfig = {
    apiKey: "xxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxxxxx.firebaseio.com",
    projectId: "xxxxxxx",
    storageBucket: "xxxxxxxxxx",
    messagingSenderId: "xxxxxxxxx"
};
export {authConfig}
```
```
$ npm run serve
```

## bulma window size
```　
max-width:768px  .is-mobile
min-width:769px  .is-tablet
min-width:769px  and max-width:1087px  .is-tablet-only
max-width:1087px  .is-touch
min-width:1088px  .is-desktop
min-width:1088px  and max-width:1279px  .is-desktop-only
min-width:1280px  .is-widescreen
min-width:1280px  and max-width:1471px  .is-widescreen-only
min-width:1472px  .is-fullhd
```