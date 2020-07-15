var app = angular.module('myApp', []);

app.controller('gameCtrl', function($scope) {
	$scope.playerToAdd = '';
	$scope.playerMap = new Map();
	$scope.playerList = [];
	$scope.addToScoreList = [];
	$scope.showAddPlayer = true;
	$scope.showPlayerTable = false;
	$scope.showEndGame = false;
	$scope.gameWinner = '';
    $scope.addPlayer = function() {
    	$scope.playerMap.set($scope.playerToAdd, 0);
    	$scope.playerList.push($scope.playerToAdd);
    	$scope.addToScoreList.push(0);
        $scope.playerToAdd = '';
    };
    $scope.startGame = function() {
    	$scope.showAddPlayer = false;
    	$scope.showPlayerTable = true;
    };
    $scope.addToScore = function(player, pointsToAdd) {
    	let newScore = $scope.playerMap.get(player) + pointsToAdd;
    	$scope.playerMap.set(player, newScore);
    }
    $scope.endGame = function() {
    	$scope.showPlayerTable = false;
    	$scope.showEndGame = true;

    	$scope.listOfWinners = [];
    	$scope.listOfLosers = [];
    	let i = 0;
    	let maxKey = '';
    	let maxVal = 0;
    	let numWinners = 1;
    	for (const [key, value] of $scope.playerMap.entries()) {
    		if (i = 0)
    		{
    			maxKey = key;
    			maxVal = value;
    		}
    		else
    		{
    			i++;
    			if (maxVal < value)
    			{
    				$scope.listOfLosers.push(maxKey);
    				maxKey = key;
    				maxVal = value;
    			}
    			else if (maxVal == value)
    			{
    				numWinners++;
    				$scope.listOfWinners.push(key);
    			}
    			else {
    				$scope.listOfLosers.push(key);
    			}
    		}
		}
		$scope.listOfWinners.push(maxKey);
    };
});
