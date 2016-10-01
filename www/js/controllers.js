angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$cordovaFileTransfer) {
    
    $scope.showAlert = function(){
        
        alert("ABC");
    }
    
    $scope.showDownload = function(){
        
        alert("Downloading");
        
        var url = "http://ionicapp.890m.com/files/pic.jpg";
        var targetPath = "/sdcard/Download/1.jpg";  //cordova.file.documentsDirectory
        var trustHosts = true;
        var options = {};

        $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
          .then(function(result) {
            // Success!
            alert("SUCCESS: " + JSON.stringify(result.response));
          }, function(err) {
            // Error
            alert("file not downloaded "+angular.toJson(err));
          }, function (progress) {
            $timeout(function () {
              $scope.downloadProgress = (progress.loaded / progress.total) * 100;
            });
          });
          alert("done downloaded");
      };
    
    }
    
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
