const superagent = require("supertest")
const  app = require("./app");

function request(){
    return superagent(app.listen())
}

describe("node接口测试",function(){
  it("test接口",function(done){
      request()
          .get("/test")
          .expect("Content-Type",/json/)
          .expect(200)
          .end(
              function(err,res){
                  if(res.data == "hellow"){
                      done()
                  }else{
                      done(err)
                  }
              }
          )
  })
})
