(function () {
    "use strict"
    angular
        .module("paperArt")
        .controller("ProductFormCtrl",
        ["$scope", "$window", "$routeParams", "ProductFormService", ProductFormCtrl]);



    
    function ProductFormCtrl($scope, $window, $routeParams, ProductFormService) {
        console.log("Controller");
        if ($routeParams.id) {
            $scope.card = ProductFormService.getCard($routeParams.id);
        }
        else {
            $scope.card = { id: 0 };
        }
        //$scope.card = ProductFormService.getCard($routeParams.id);
        
        $scope.updatedCard = angular.copy($scope.card);

        $scope.occasions = [
            "Wedding",
            "Birthday",
            "Valentine's Day",
            "Christmas",
            "Kefish me shti zvynna..."
        ];

        $scope.submitForm = function () {
            if ($scope.updatedCard.id == 0) {
                ProductFormService.insertCard($scope.updatedCard);
            }
            else {
                ProductFormService.updateCard($scope.updatedCard);
            }

            $scope.card = angular.copy($scope.updatedCard);
            window.history.back();
        }


        $scope.cancelForm = function () {
            window.history.back();
        }
        }



}());