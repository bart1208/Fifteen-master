// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
require.config({
    baseUrl: "js/lib",
    paths: {
      app: "../app"
    },
    shim: {
        "jquery.blockUI": ["jquery-2.1.1.min"]
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);
