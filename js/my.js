var app = angular.module('myapp', []); //AngularJS模块定义应用
app.controller('MainController', function($scope) {
	$scope.submitForm = function() {
		alert("表单提交了~");
	};
});