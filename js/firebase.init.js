angular.module('firebaseConfig', ['firebase'])

.run(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCv1xweMZJEy2g-OGYLlwjopzWktg9WLs0",
    authDomain: "fullbusinesssolutions-22ee0.firebaseapp.com",
    databaseURL: "https://fullbusinesssolutions-22ee0.firebaseio.com",
    storageBucket: "fullbusinesssolutions-22ee0.appspot.com",
  };
  firebase.initializeApp(config);

})

/*

.service("TodoExample", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("todos");
    var items = $firebaseArray(ref);
    var todos = {
        items: items,
        addItem: function(title){
            items.$add({
                title: title,
                finished: false
            })
        },
        setFinished: function(item, newV){
            item.finished = newV;
            items.$save(item);
        }
    }
    return todos;
}])

*/