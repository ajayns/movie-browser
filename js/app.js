var app = angular.module('movieBrowser', []);

app.controller('mainCtrl', function($scope, $http) {

  $scope.$watch('searchTerm', function() {
    fetch();
  })

  function fetch(){
    $http.get("https://www.omdbapi.com/?t=" + $scope.searchTerm + "&tomatoes=true&plot=full")
      .then(function(response){ $scope.details = response });

    $http.get("https://www.omdbapi.com/?s="$scope.searchTerm)
      .then(function(response){ $scope.related = response });
  }

  $scope.select = function() {
    this.setSelectionRange(0, this.value.length);
  }

  $scope.update = function(movie) {
    $scope.searchTerm = movie.Title;
  }
});
