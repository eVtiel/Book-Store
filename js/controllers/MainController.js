app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Month\'s Bestsellers'; 
  $scope.promo = 'The most popular books this month.';
  $scope.products = [
  	{ 
    	name: 'The Book of Trees', 
    	price: 19, 
    	pubdate: new Date('2014', '03', '08'), 
    	cover: 'http://www.bookoftrees.info/bt/images/cover_640.jpg', 
      likes: 732,
      dislikes: 23
  	}, 
  	{ 
    	name: 'Program or be Programmed', 
    	price: 8, 
    	pubdate: new Date('2013', '08', '01'), 
    	cover: 'http://d.gr-assets.com/books/1399495284l/9408311.jpg', 
      likes: 430,
      dislikes: 74
  	}, 
  	{ 
    	name: 'Harry Potter & The Prisoner of Azkaban', 
    	price: 11.99, 
    	pubdate: new Date('1999', '07', '08'), 
    	cover: 'http://upload.wikimedia.org/wikipedia/en/b/b4/Harry_Potter_and_the_Prisoner_of_Azkaban_(US_cover).jpg', 
       likes: 0,
      dislikes: 0
  	}, 
  	{ 
    	name: 'Ready Player One', 
    	price: 7.99, 
    	pubdate: new Date('2011', '08', '16'), 
    	cover: 'http://upload.wikimedia.org/wikipedia/en/a/a4/Ready_Player_One_cover.jpg', 
      likes: 0,
      dislikes: 0
  	}
  ]
$scope.plusOne = function(index) {
  $scope.products[index].likes +=1;
};
$scope.minusOne = function(index) {
  $scope.products[index].dislikes +=1;
};
}]);
