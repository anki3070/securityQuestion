'use strict';

/**
 * @ngdoc function
 * @name securityQuestionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the securityQuestionApp
 */
angular.module('securityQuestionApp')
  .controller('MainCtrl', function (SECURITY_QUESTION_CONST,$scope,$location) {
    $scope.minValue = 10;
    $scope.maxValue = 100; 
    $scope.answer = '';


    $scope.isVerified =function(){
    	var answer =parseInt($scope.answer);
    	if(answer>$scope.minValue && answer<$scope.maxValue){
    		$scope.success = true;
    		$location.path('/welcome');
    	}else{
    		$scope.error = false;
    	}
    } ;  

    $scope.formatMessage = function (property, values) {
      if ($scope.nullable(property)) {
        return property.replace(/({\d})/ig,
          function (match) {
            return values[parseInt(match.charAt(1))];
          });
      }
    };

    $scope.nullable = function (value) {
        if (value !== null && value !== undefined && value !==
          '') {
          return !0;
        } else {
          return !1;
        }
      };

   $scope.$on('$locationChangeStart', function(event) {
    if (!$scope.success) {
        event.preventDefault();
    }
});
     $scope.securityQuestion = $scope.formatMessage(SECURITY_QUESTION_CONST.QUESTION,[$scope.minValue,$scope.maxValue]);
  });
