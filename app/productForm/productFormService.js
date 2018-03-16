(function () {
    "use strict"
    angular
        .module("paperArt")
        .factory("ProductFormService",
        ProductFormService);



   
    function ProductFormService() {
        console.log("service");
        var getCard = function (id) {
            if (id == 1) {
                return {
                        id: 1,
                        fullName: "Butterflies",
                        size: "Medium (10x5cm)",
                        colourScheme: "Purple-Blue",
                        occasion: "Wedding",
                        text: "Testing car making",
                        price: "£12"
                }
            }
            return null;
        };

        var insertCard = function (newCard) {
            return true;
        };

        var updateCard = function (card) {
            return true;
        };

        return {
            getCard: getCard,
            insertCard: insertCard,
            updateCard: updateCard,
        };
    }


}());