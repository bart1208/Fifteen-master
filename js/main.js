// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
require.config({
    baseUrl: "js/vendor",
    paths: {
      app: "../app"
    },
    shim: {
        "jquery.blockUI": ["jquery-2.1.3.min"],
        "bootstrap.min": ["jquery-2.1.3.min"]
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);
