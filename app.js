var myApp = angular.module('myApp', []);
myApp.controller('myController', function($scope){
   console.log('my controller');
   $scope.newUser={};
   $scope.clickedUser={};
   
   
   $scope.users=[
       {username:"santhosh", fullName:"santhosh Kumar", email:"santhosh@gmail.com"},
       {username:"roja", fullName:"roja mattaparthi", email:"roja@gmail.com"},
       {username:"sethu", fullName:"sethu nandam", email:"sethu@gmail.com"}
   ];
   $scope.saveUser= function(){
       console.log($scope.newUser);
       $scope.users.push($scope.newUser);
       $scope.newUser={};
       $scope.message="New User Added Successfully";
   }
   $scope.delUser=function(){
       $scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
       $scope.message="New User Deleted Successfully";
   }
   $scope.selectUser=function(user){
       console.log(user)
       $scope.clickedUser= user;
       
   }

   $scope.updateUser= function(){
    $scope.message="New User Updated Successfully";
   }
   $scope.clearMessage = function(){
    $scope.message=""; 
   }

});

