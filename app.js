angular
.module('app', ['firebase'])
.const('firebaseConfig'{
      apiKey: "AIzaSyDt6DhtN242cZRCMtgA_u8hs98P1AePQAc",
      authDomain: "my-version-of-inclass.firebaseapp.com",
      databaseURL: "https://my-version-of-inclass.firebaseio.com",
      storageBucket: "my-version-of-inclass.appspot.com",
      messagingSenderId: "526132328277"
})
.run(firebaseConfig => firebase.initializeApp(firebaseConfig))
.service('dbRefRoot', DbRefRoot)
.service('contacts', Contacts)

function DbRefRoot() {
  return firebase.database().ref()
}

function Contacts(deRefRoot, $firebaseObject, $firebaseArray){
  
}
