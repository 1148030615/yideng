class PraiseButtom {
    constructor(zan){
        this.num = zan?zan :0;
    }
    Praise(){
        this.num++;
    }

}

class Thumb extends PraiseButtom{
    constructor(zan,el,callback){
        super(zan);
        this.el = el;
        if(el.length>0){
            let that  =  this;
            el.click(function(){
                that.Praise();
                callback(that.num);
                console.log(that)
            });
        }

    }
}

module.exports  =  Thumb;