angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', '$ionicPopup', '$rootScope', '$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup, $rootScope, $firebaseArray) {

$rootScope.mySearch = {
    'customerSearch':'',
    'realdebridSearch':''
} 

 //firebase.database().ref().child("/businesses/").once('value').then(function(snapshot) { 
     //$scope.allbusinesses = snapshot.val();
     var ref = firebase.database().ref().child('businesses/');
     $scope.allbusinesses = $firebaseArray(ref);
     
//alert(JSON.stringify( $scope.allbusinesses )) 
 

$scope.addNew = function(){
$rootScope.newBusiness = {
        'id': 'blcomputers',
    'businessname': 'B & L Custom Computers',
    'logourl': 'http://blcomputers.com/img/logo_1_white_glow.png',
    'contactname': 'Dave Bailey',
    'email': 'dave@blcomputers.com',
    'phone': '8017379600',
    'cell':' ',
    'address': '860 W Riverdale Rd #B8',
    'city': 'Riverdale',
    'state': 'UT',
    'zip': '84405',
    'website': 'http://blcomputers.com', 
    'facebook': ' ',
    'instagram': ' ',
    'tiktok': ' ',
    'description': 'If your computer wont behave, just call dave',
    'tags': 'computer, laptop, computer repair, anti virus', 
    'settings': { 
        'active': true,
        'level': '1',
        'contact': true,
    }
};



  firebase.database().ref().child("/businesses/" + $rootScope.newBusiness.id).set( $rootScope.newBusiness).then(function(){
            $ionicPopup.alert({
                         title: 'Congratulations!',
                         template: 'Custom has been created!'
                       });
            });


}



}])
   
.controller('businessesCtrl', ['$scope', '$stateParams', '$ionicPopup', '$rootScope', '$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup, $rootScope, $firebaseArray) {

$rootScope.mySearch = {
    'customerSearch':'',
    'realdebridSearch':''
} 

 //firebase.database().ref().child("/businesses/").once('value').then(function(snapshot) { 
     //$scope.allbusinesses = snapshot.val();
     var ref = firebase.database().ref().child('businesses/');
     $scope.allbusinesses = $firebaseArray(ref);
     
//alert(JSON.stringify( $scope.allbusinesses )) 
 

$scope.addNew = function(){
$rootScope.newBusiness = {
        'id': 'blcomputers',
    'businessname': 'B & L Custom Computers',
    'logourl': 'http://blcomputers.com/img/logo_1_white_glow.png',
    'contactname': 'Dave Bailey',
    'email': 'dave@blcomputers.com',
    'phone': '8017379600',
    'cell':' ',
    'address': '860 W Riverdale Rd #B8',
    'city': 'Riverdale',
    'state': 'UT',
    'zip': '84405',
    'website': 'http://blcomputers.com', 
    'facebook': ' ',
    'instagram': ' ',
    'tiktok': ' ',
    'description': 'If your computer wont behave, just call dave',
    'tags': 'computer, laptop, computer repair, anti virus', 
    'settings': { 
        'active': true,
        'level': '1',
        'contact': true,
    }
};



  firebase.database().ref().child("/businesses/" + $rootScope.newBusiness.id).set( $rootScope.newBusiness).then(function(){
            $ionicPopup.alert({
                         title: 'Congratulations!',
                         template: 'Custom has been created!'
                       });
            });


}



}])
   
.controller('cartCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cloudCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup', '$rootScope', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $ionicPopup, $rootScope,  $ionicLoading) {
//Checkbox to save login info 
$scope.saveInfo = [
    {'checkbox':false}
    ]


//For User Login  
$rootScope.mainUser = [{
    'id': '',
    'password':'',
    'email': ''
    }]

//Try to load info from local storage
try { 
    $rootScope.mainUser.email = localStorage.getItem('myLoginEmail');
     if($rootScope.mainUser.email.length > 0) $scope.saveInfo.checkbox = true;
     $rootScope.mainUser.password = localStorage.getItem('myLoginPassword');
     $rootScope.mainUser.id = localStorage.getItem('myLoginId');
 
}
catch(err){
    
}

 $scope.logincount = 0;
 
 
$scope.login = function(){

$ionicLoading.show({
      template: 'Loading...',
      duration: 10000
    }).then(function(){
       console.log("The loading indicator is now displayed"); 
    });
                 setTimeout(function(){
         $scope.$apply();
         $rootScope.$apply();
        },300)
        
     //   alert($rootScope.mainUser.email)
         //Check for user account / business login
    firebase.auth().signInWithEmailAndPassword($rootScope.mainUser.email,$rootScope.mainUser.password     )//$rootScope.mainUser.email, $rootScope.mainUser.password)
   .then(function() { 
       //Process Login
       
           firebase.database().ref().child("/businesses/" + $rootScope.mainUser.id).on('value', function(snapshot) {
    //  $scope.mainUser.pageType = snapshot.val();
      $scope.myBusinessInfo = snapshot.val();
     // alert($scope.myBusinessInfo.businessname)
    });
    
    if ($scope.myBusinessInfo.email !== $rootScope.mainUser.email){
        $ionicPopup.alert({
                     title: 'Login Error!',
                     template: 'Error '
                   })
        return;
    }
         $ionicLoading.hide();
        $ionicPopup.alert({
                     title: 'Login Complete!',
                     template: 'You have signed in '
                   }).then ( function(){  
                       //Go to home page after login
   if($scope.saveInfo.checkbox === true){
        localStorage.setItem('myLoginEmail', $rootScope.mainUser.email );
        localStorage.setItem('myLoginPassword', $rootScope.mainUser.password);
        localStorage.setItem('myLoginId', $rootScope.mainUser.id);
   } else {
       localStorage.removeItem('myLoginEmail');
       localStorage.removeItem('myLoginPassword');
       localStorage.removeItem('myLoginId');
   }
   
    $scope.logincount = 0;
    $ionicLoading.hide();
                       $state.go('businesses');
                       
                   } );
       
   }).catch(function(error) {
      // An error happened.
     //        $rootScope.mainUser.email = '';
      //     $rootScope.mainUser.password ='';
      if($scope.logincount === 0){
          $scope.logincount = 1;
          setTimeout(function(){
               $scope.login();
          }, 300) 
         
      }else{
                $ionicPopup.alert({
                     title: 'Sign In Error!',
                     template: 'There was an error on signing in: ' + error
                   });
      }

    } //END CATCH FUNCTION
    );
        
 } //END userLogin Function 




}])
   
.controller('myProfileCtrl', ['$scope', '$stateParams', '$rootScope', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $rootScope, $ionicPopup) {


 //firebase.database().ref().child("/businesses/").once('value').then(function(snapshot) {   )}
 //    $scope.allbusinesses = snapshot.val();  } 
    firebase.database().ref().child("/businesses/" + $rootScope.mainUser.id).on('value', function(snapshot) {
    //  $scope.mainUser.pageType = snapshot.val();
      $scope.myBusinessInfo = snapshot.val();
     // alert($scope.myBusinessInfo.businessname)
    });
    
    
    
    
    $scope.updateprofile = function(){
        
        
         var surveyListing = firebase.database().ref().child("/businesses/"  + $rootScope.mainUser.id);
                surveyListing.update($scope.myBusinessInfo);
     
            $ionicPopup.alert({
                         title: 'Congratulations!',
                         template: 'Profile updated!'
                       });
          
    }
        
    

}])
   
.controller('signUpCtrl', ['$scope', '$stateParams', '$ionicPopup', '$rootScope', '$firebaseArray', '$state', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup, $rootScope, $firebaseArray, $state, $ionicLoading) {

//For User Login  
$rootScope.newnUser = [{
    'id': '',
    'password':'',
    'password1':'',
    'email': ''
    }]

//For New user Info


$rootScope.newBusiness = {
        'id': '',
    'businessname': '',
    'logourl': '',
    'password': '',
    'password1': '',
    'contactname': '',
    'email': '',
    'phone': '',
    'cell':' ',
    'address': '',
    'city': '',
    'state': '',
    'zip': '',
    'website': '', 
    'facebook': ' ',
    'instagram': ' ',
    'tiktok': ' ',
    'description': '', 
    'settings': { 
        'active': true,
        'level': '1',
        'contact': true,
    }
};




$scope.signup = function(){
    
      if($rootScope.newBusiness.id === null || $rootScope.newBusiness.id === undefined){
         $ionicPopup.alert({
                         template: 'ID is required!',
                         title: 'Error!'
                       });
        return;
    }
    
          if($rootScope.newBusiness.email === null || $rootScope.newBusiness.email === undefined){
         $ionicPopup.alert({
                         template: 'Email is required!',
                         title: 'Error!'
                       });
        return; 
    }
    
          if($rootScope.newBusiness.password === null || $rootScope.newBusiness.password === undefined){
         $ionicPopup.alert({
                         template: 'Passowrd is required!',
                         title: 'Error!'
                       });
        return;
    }
          if($rootScope.newBusiness.password1 === null || $rootScope.newBusiness.password1 === undefined){
         $ionicPopup.alert({
                         template: 'Password again is required!',
                         title: 'Error!'
                       });
        return;
    }    
    
    if($rootScope.newBusiness.password1 !==  $rootScope.newBusiness.password){
         $ionicPopup.alert({
                         template: 'Passwords must match!',
                         title: 'Error!'
                       });
        return;
    }    
    
    
    $ionicLoading.show({
      template: 'Creating Account...',
      duration: 30000
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
    
                     setTimeout(function(){
         $scope.$apply();
         $rootScope.$apply(); 
        },300)
         
    
        $rootScope.newBusiness.id =  $rootScope.newBusiness.id.replace(/\s+/g, '').toLowerCase();
     $rootScope.newBusiness.email = $rootScope.newBusiness.email;
    firebase.auth().createUserWithEmailAndPassword($rootScope.newBusiness.email, $rootScope.newBusiness.password)
    
    .then(function(){ 
        
         $ionicLoading.show({
      template: 'Account Created adding data...',
      duration: 30000
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
        
         firebase.auth().signInWithEmailAndPassword($rootScope.newBusiness.email,$rootScope.newBusiness.password     )//$rootScope.mainUser.email, $rootScope.mainUser.password)
                .then(function() {   
        
        
                               firebase.database().ref().child("/businesses/" + $rootScope.newBusiness.id).on('value', function(snapshot) {
                                    //  $scope.mainUser.pageType = snapshot.val();
                                      $scope.myBusinessInfo = snapshot.val();
                                    if(   $scope.myBusinessInfo === null){
                                        $scope.addNew();
                                    }
                                    });
         
                       }).catch(function(error) {
                          // An error happened.
                              //   $rootScope.newBusiness.email = '';
                            //   $rootScope.newBusiness.password ='';
                               $ionicLoading.hide();
                          $ionicPopup.alert({
                                         title: 'Sign In Error!',
                                         template: 'There was an error on signing in: ' + error
                                       });
                        });
        
        
        
    })
    .catch(function(error) {
                              // Handle Errors here.
                              var errorCode = error.code;
                              var errorMessage = error.message;
                              $ionicLoading.hide();
                              alert( errorCode + ' ' + errorMessage)
                              // ...
                            });
}




$scope.addNew = function(){


  firebase.database().ref().child("/businesses/" + $rootScope.newBusiness.id).set( $rootScope.newBusiness).then(function(){
          $ionicLoading.hide();
                      $rootScope.mainUser.id = $rootScope.newBusiness.id;
                      
          //  $ionicPopup.alert({
            //             title: 'Congratulations!',
            //             template: 'Custom has been created!'
            //           });
                       
                        $state.go('businesses');
            });


}




}])
 