// const firebaseConfig = {
//   apiKey: "AIzaSyDgVbaSqNIYyJQfqCb7E92nNDBtemtoNMI",
//   authDomain: "learn-js-37.firebaseapp.com",
//   databaseURL: "https://learn-js-37.firebaseio.com",
//   projectId: "learn-js-37",
//   storageBucket: "learn-js-37.appspot.com",
//   messagingSenderId: "651012216265",
//   appId: "1:651012216265:web:d7b916e890f8932e95c418",
//   measurementId: "G-QFFSB7NQWC",
// };
// // Initialize Firebase
// const defaultProject = firebase.initializeApp(firebaseConfig);
// const db = firebase.database().ref("users/");

// const postData = (id, data) => db.child(id).set(data);
// const updateData = (id, data) => db.child(id).update(data);

// postData(1, {
//   username: "Helen",
//   email: "email",
//   profile_picture: "imageUrl",
// });

// postData(2, {
//   username: "Izzy",
//   email: "email",
//   profile_picture: "imageUrl",
// });

// db.on(
//   "value",
//   function (snapshot) {
//     console.log(snapshot.val());
//   },
//   function (error) {
//     console.log("Error: " + error.code);
//   }
// );

// https://www.tutorialspoint.com/firebase/index.htm
