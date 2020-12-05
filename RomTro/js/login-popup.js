var app = angular.module('Home', ['ngAnimate', 'ui.bootstrap']);
			app.controller('LoginCtrl',function($scope, $http){
				// For modal
				$scope.showMe = false;				
				$scope.showMainContainer = true;
				$scope.showDiv = function(){
					$scope.showMe = true;
					$scope.name = "";
					$scope.pass = "";
					$scope.myName= true;
					$scope.msg = true;
				}
				

				// show menu
				$scope.showMenu = function() {
					$scope.showMenuContainer = true;
					window.scrollTo(500, 0);
				}
				$("#romtro-logo").on('click', function() {
				  $scope.showMenuContainer = false;
				  window.scrollTo(500, 0);
				});
				// For login
				$scope.name = " ";
				$scope.msg = true;
				$scope.login = function(){
					$scope.msg = false;
				}
				// For msg in modal
				$scope.myName= true;
				$scope.showName = function(){
					$scope.myName= false;
				}

				//for Sign Up
				$scope.showSignUp = false;
				$scope.showSignUpPopup = function(){
					$scope.showSignUp = true;
					$scope.userName = "";
					$scope.userEmail = "";
					$scope.userPassword = "";
					$scope.confirmPassword = "";
					$scope.myName= true;
					$scope.msg = true;					
				}

				//Forgot password
				$scope.showForgotPassword = false;
				$scope.showForgotPasswordPopup = function(){
					$scope.showForgotPassword = true;
					$scope.userEmailId = "";
					$scope.myName= true;
					$scope.msg = true;					
				}


				 //Search Box - city auto populate
			    $scope.selected = undefined;
			    //lookup values
			    $scope.countries = [ 
			      {name: 'Dwarka', code: 'AF'},
			      {name: 'Rohini', code: 'AG'},
			      {name: 'Noida', code: 'BS'},
			      {name: 'Gurgaon', code: 'KH'},
			      {name: 'Ghaziabad', code: 'CV'}
			    ];
			});