var System = require("system");
System.loadSystem(location)
    .then(function (system) {
        return system.import("./work");
    });