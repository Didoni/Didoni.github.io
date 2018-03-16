(function () {
    "use strict";
    angular
        .module("paperArt")
        .controller("ProductListCtrl",
        ["productResource", ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm = this;
        
        vm.searchCriteria = "GDN";
        //vm.products = "sea";
        productResource.query({ search: vm.searchCriteria }, function (data) {
            vm.products = data;
        });
    }
}());