var System = require("system");
var jquery =  require("./jquery");
System.loadSystem(jquery)
    .then(function (system) {
        return system.import("./work");
    });