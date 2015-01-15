// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
require.config({
    baseUrl: "js/vendor",
    paths: {
    	jquery: "jquery-2.1.3.min",
      	app: "../app"
    },
    shim: {
        "bootstrap.min": ["jquery"],
        "app/MenuState": ["jquery"],
        "app/ScoreState": ["jquery"],
        "app/CreditsState": ["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/GameState"]);
