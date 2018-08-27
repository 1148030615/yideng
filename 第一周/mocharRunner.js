const Mocha = require("mocha");
const mocha =new Mocha({
    reporter:"mochawesome",
    reporterOptions:{
        reportDir:"./mochawesomeFilename"
    },
})
mocha.addFile("./service/router.spec.js");
mocha.run(function(){
    console.log("mocha完成");
    process.exit()

})