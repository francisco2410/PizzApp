angular.module('starter.routes', [])

.config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider) {
$ionicConfigProvider.tabs.position('bottom'); 
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js

  $stateProvider
  
   
    .state('tabsController.inicio', {
      url: '/inicio',
      views: {
        'tab1': {
          templateUrl: 'templates/inicio.html'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.login', {
      url: '/login',
      views: {
        'tab2': {
          templateUrl: 'templates/login.html'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.registro', {
      url: '/registro',
      views: {
        'tab3': {
          templateUrl: 'templates/registro.html'
        }
      }
    })
    .state('tabsController.equipo', {
      url: '/equipo',
      views: {
        'tab4': {
          templateUrl: 'templates/equipo.html',
          
        }
      }
    })
     
      .state('tabsController.detalleT', {
      url: '/equipo/:aId',
      views: {
        'tab4': {
          templateUrl: 'templates/detalleT.html',
           controller: 'TeamController'
        }
      }
    })
         

      
    
      
    .state('tabsController', {
      url: '/page2',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('menu2.menu', {
      url: '/menu',
      views: {
        'side-menu22': {
          templateUrl: 'templates/menu.html'
        }
      }
    })
        
      
    
      
    .state('menu2', {
      url: '/side-menu22',
      abstract:true,
      templateUrl: 'templates/menu2.html'
    })
      
    
      
        
    .state('menu2.miCuenta', {
      url: '/perfil',
      views: {
        'side-menu22': {
          templateUrl: 'templates/miCuenta.html'

        }
      }
    })

   
       
        
    .state('pizzas', {
      url: '/pizzas',
      templateUrl: 'templates/pizzas.html'
    })
        
      
    
      
        
    .state('bebidas', {
      url: '/bebidas',
      templateUrl: 'templates/bebidas.html'
    })
        
     .state('postres', {
      url: '/postres',
      templateUrl: 'templates/postres.html'
    })   

    .state('info', {
      url: '/info',
      templateUrl: 'templates/info.html'
    })  
      
    
      
        
    .state('menu2.carrito', {
      url: '/carrito',
      views: {
        'side-menu22': {
          templateUrl: 'templates/carrito.html'
        }
      }
    })
     
     .state('menu2.historial', {
      url: '/historial',
      views: {
        'side-menu22': {
          templateUrl: 'templates/historial.html'

        }
      }
    })  

     .state('menu2.detalle', {
      url: '/historial/:aId',
      views: {
        'side-menu22': {
          templateUrl: 'templates/envio.html',
                    controller: 'ListController'

        }
      }
    })  
      
    
      
        
    .state('envio', {
      url: '/envio',
      templateUrl: 'templates/envio.html'
    })
        
      
    
      
        
    .state('ubicacion', {
      url: '/ubicacion',
       templateUrl: 'templates/ubicacion.html',
           controller: 'MapController'
      
    })
        
         .state('menu2.ubicacion1', {
      url: '/ubicacion1',
      views: {
        'side-menu22': {
          templateUrl: 'templates/ubicacion1.html'
        }
      }
    })
      
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/page2/inicio');
  

  

});