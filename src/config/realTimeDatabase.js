import firebase from 'firebase'
import {authConfig} from './firebaseConfig'
firebase.initializeApp(authConfig)
const importantInfo = firebase.database().ref('/info/important')
const bingo = firebase.database().ref('/bingo')
const infosList = firebase.database().ref('/info/infos')

export {importantInfo, bingo, infosList}