angular.module('starter.controllers', [])
  
.controller('inicioCtrl', function($scope) {

})
   
.controller('loginCtrl', function($scope) {
 $('.sendLogin').unbind('click').bind('click', function(){
      api.loginUser(function(jsonResponse){
        if(jsonResponse.code == '15'){
            console.log('do something like other function');
            console.log(jsonResponse.data);
            console.log(jsonResponse.data.id);
            console.log(jsonResponse.data.user);
         }
        //aqui van a guardar el id y el user para las otras transaccione
        //la secion la mantendran con windows.localstorge
      });
  });
})
   
.controller('registroCtrl', function($scope) {
  $('.sendRequest').unbind('click').bind('click', function(){
      api.regiserUser(function(data){ });
  });
})

      
.controller('menuCtrl', function($scope) {

})
      
.controller('miCuentaCtrl', function($scope) {

})
   
.controller('pizzasCtrl', function($scope) {

})

.controller('infoCtrl', function($scope) {

})

   
.controller('bebidasCtrl', function($scope) {

})

.controller('postresCtrl', function($scope) {

})
   
.controller('carritoCtrl', function($scope) {

})
   
.controller('envioCtrl', function($scope) {

})
   
.controller('ubicacionCtrl', function($scope) {

})

.controller('historialCtrl', function($scope) {

})

.controller('equipoCtrl', function($scope) {

})

.controller('popup', function($scope,  $ionicPopup, $timeout) {
 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({

     title: 'Enviar Pedido',
     template: 'Confirmar pedido?'
   });

   confirmPopup.then(function(res) {
     if(res) {
   template: 'templates/menu.html'       
     

     } else {

         templateUrl: "templates/menu.html";

     }
   });
 };
})
 

 
 .controller('MapController', function($scope, $ionicLoading, $compile) {
  $scope.initialize = function() {
    var myLatlng = new google.maps.LatLng(31.866090973806596,-116.5986585184326);
    
    var mapOptions = {
      center: myLatlng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);


    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Tu Ubicacion'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    $scope.map = map;
  }
  //google.maps.event.addDomListener(window, 'load', initialize);

  
})


.controller('ListController', ['$scope', '$http', '$state',
    function($scope, $http, $state) {
    $http.get('js/data.json').success(function(data) {
      $scope.carrito = data.carrito;
      $scope.usuario = data.usuario;
      $scope.whichartist=$state.params.aId;
    
$scope.data = { showDelete: false };

      $scope.onItemDelete = function(item) {
        $scope.carrito.splice($scope.carrito.indexOf(item), 1);
      }

   
    
      
    });
}]);

