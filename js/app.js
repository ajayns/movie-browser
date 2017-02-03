var app = angular.module('movBro', []).controller('mainCtrl', function($scope, $http) {

  $scope.$watch('searchTerm', function(){
    fetch();
  });

  $scope.searchTerm = "The Dark Knight";

  function fetch(){
    $http.get("https://www.omdbapi.com/?t=" + $scope.searchTerm + "&tomatoes=true&plot=full")
      .then(function(response){ $scope.details = response.data });

    $http.get("https://www.omdbapi.com/?s=" + $scope.searchTerm)
      .then(function(response){ $scope.related = response.data });
  }

  $scope.select = function() {
    this.setSelectionRange(0, this.value.length);
  };

  $scope.update = function(movie) {
    $scope.searchTerm = movie.Title;
  };
});

app.directive('ngBg', function() {
  return function(scope, element, attrs) {
    var url = attrs.ngBg;
    element.css({
      'background-image': 'url(' + url + ')'
    });
  };
});
