angular
.module('app', ['firebase'])
.constant('firebaseConfig', {
  apiKey: "AIzaSyCjBsE-TacGXrkXz-m--UmBqohOlmCbTHk",
authDomain: "small-firebase-app.firebaseapp.com",
databaseURL: "https://small-firebase-app.firebaseio.com",
storageBucket: "small-firebase-app.appspot.com",
messagingSenderId: "251817607638"
})
.run(firebaseConfig => firebase.initializeApp(firebaseConfig))
.service('dbRefRoot', DbRefRoot)
.service('contacts', Contacts)
.controller('ContactCtrl', ContactCtrl)
function DbRefRoot() {
  return firebase.database().ref()
}

function Contacts(dbRefRoot, $firebaseObject, $firebaseArray){
  const dbRefContacts = dbRefRoot.child('contacts')

  this.get = function get(id){
    return $firebaseObject(dbRefContacts.child(id))
  }

  this.getAll = function getAll(){
    return $firebaseArray(dbRefContacts)
  }
}

function ContactCtrl(contacts){

  this.clearForm = function clearForm() {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      bday: ''
    }
  }

  this.newContact = this.clearForm()

  this.contacts = contacts.getAll()

  this.add = function add(newContact){
    this.contacts
    .$add(newContact)
    .then(newRef => {
      this.newContact = this.clearForm()
    })
  }








}
