function check(){
  document.getElementById("login",'click',function(e){
    alert('clicked');
  })
};

check();

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDThsSSmrM586vOqjUQPe1vThyIRIuaqwE",
  authDomain: "inventory-depot.firebaseapp.com",
  databaseURL: "https://inventory-depot.firebaseio.com",
  projectId: "inventory-depot",
  storageBucket: "inventory-depot.appspot.com",
  messagingSenderId: "621383880719"
};
firebase.initializeApp(config);


firebase.initializeApp(config);
   //Getting the Email/Password and Signin button from the the inputs above.
   let signIn = document.getElementById('login');
   //Listening on thesignIn button click.
   signIn.addEventListener('click', (ev) => {
       let email = document.getElementById('IDemail').value;
       let password = document.getElementById('IDpassword').value;
       ev.preventDefault();
       console.log(email, password);
       firebase.auth().createUserWithEmailAndPassword(email, password)
           .then(user => {
               alert('you succeeded')
               //Handling the successful authentication.
               window.location = "../home.html";
           }).catch(function (error) {
           //Handling the error showcasing. });
               alert('you failed. try again')
       }, false);
   });
   // let phoneSignIn = document.getElementById('login2');
   // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('login2', {
   //     'size': 'invisible',
   //     'callback': function(response) {
   //         console.log("callback fired")
   //     }
   // });
   // phoneSignIn.addEventListener('click', (ev) => {
   //     console.log("phoneSignIn fired")
   //     ev.preventDefault();
   //     var appVerifier = window.recaptchaVerifier;
   //     let phoneNumber = document.getElementById('phonenumber').value;
   //     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
   //         .then(function (confirmationResult) {
   //             resetRecaptcha();
   //             // SMS sent. Prompt user to type the code from the message, then sign the
   //             // user in with confirmationResult.confirm(code).
   //             var code = window.prompt('Enter the verification code you received by SMS');
   //             if (code) {
   //                 confirmationResult.confirm(code).then(function () {
   //                     console.log("success! user is logged in")
   //                     window.close();
   //                 }).catch(function (error) {
   //                     // User couldn't sign in (bad verification code?)
   //                     console.error('Error while checking the verification code', error);
   //                     window.alert('Error while checking the verification code:\n\n'
   //                         + error.code + '\n\n' + error.message)
   //                 });
   //             }
   //         }).catch(function (error) {
   //         // Error; SMS not sent
   //         // ...
   //     })
   // });
   // function resetRecaptcha() {
   //     return window.recaptchaVerifier.render().then(function(widgetId) {
   //         grecaptcha.reset(widgetId);
   //     });
   // }
