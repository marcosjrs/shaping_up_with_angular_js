(function() {
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('StoreController', ["$http",function($http){
    var store = this;
    store.products = [];
    $http.get("./store-products.json").then(function(resp){
      console.log(resp.data);
      store.products = resp.data;
    });
    
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
})();
