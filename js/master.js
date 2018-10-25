$( "#darkButton" ).click(function() {
  $( "body" ).toggleClass("paintBlack");
});


//Login authenticate n shit
var provider = new firebase.auth.GoogleAuthProvider();

$("#loginButton").click(function(){
  console.log("hello");
  firebase.auth().signInWithRedirect(provider);
});



//retreive data
var database = firebase.database();
var authors = database.ref('articles').once('value');
console.log(authors);
