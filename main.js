var module = angular.module("example", ["agGrid"]);

module.controller("exampleCtrl", function($scope) {


});

module.directive('dbpGrid', function($parse) {
	return {
		restrict: 'E',
		template:`<div ag-grid="gridOptions" class="ag-fresh" style="height: 100%;" ></div>`,
		replace:true,
		transclude: false,
		scope:false,
		controller:function($scope){
		  	var columnDefs = [
				{headerName: "Make", field: "make"},
				{headerName: "Model", field: "model"},
				{headerName: "Price", field: "price"}
			];

			var rowData = [
				{make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
				{make: "Porsche", model: "Boxter", price: 72000}
			];
			$scope.gridOptions = {
				columnDefs: columnDefs,
				angularCompileRows: true,
				groupHeaders: true,
				rowData: rowData,
				enableColResize: true,
				enableFilter: true,
				enableSorting: true,
				debug: true,
				onReady: function() {
					console.log("--------------------aaaaa");
					//$scope.gridOptions.api.setRowData($scope.gridOptions.rowData);
				}
			};	
		},	
		link:function($scope, element, atttributes) {
			console.log("link");

		}
	}
});