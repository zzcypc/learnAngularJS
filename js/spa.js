var app = angular.module('myapp', ['ngRoute']);
//app.value('usertoken','');
var usertoken;
app.controller('registerctrl', function($scope, $http) {
	$scope.user = {
		email: '',
		password: ''
	};
	$scope.btnRegister = function() {
		var posturl = 'http://api.neuqst.qoder.cn/users/register';

		$http({
			method: 'POST',
			url: posturl,
			data: $scope.user
		}).success(function(data, header, config, status) {
			//响应成功
			$scope.resInfo=data.data.Msg;
		}).error(function(data, header, config, status) {
			//处理响应失败
			$scope.resInfo="fail";
		});;
	};
});
app.controller('loginctrl', function($scope, $http) {
	$scope.user = {
		email: '',
		password: ''
	};
	$scope.btnLogin = function() {
		var posturl = 'http://api.neuqst.qoder.cn/users/login';

		$http({
			method: 'POST',
			url: posturl,
			data: $scope.user
		}).success(function(data, header, config, status) {
			//响应成功
			$scope.resInfo=data.data.Msg;
			usertoken=data.data.token;
		}).error(function(data, header, config, status) {
			//处理响应失败
			$scope.resInfo="fail";
		});;
	};

});
app.controller('infoctrl', function($scope, $http) {
	$scope.btnInfo = function() {
		var posturl = 'http://api.neuqst.qoder.cn/home/my';

		$http({
			method: 'GET',
			url: posturl,
			headers:{
				Token:usertoken
			}
		}).success(function(data, header, config, status) {
			//响应成功
			$scope.resInfo=data;
		}).error(function(data, header, config, status) {
			//处理响应失败
			$scope.resInfo="fail";
		});;
	};


});
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'register.html',
			controller: 'registerctrl'
		})
		.when('/login', {
			templateUrl: 'login.html',
			controller: 'loginctrl'
		})
		.when('/info', {
			templateUrl: 'info.html',
			controller: 'infoctrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);