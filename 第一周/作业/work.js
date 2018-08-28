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
        this.callback = callback;
    }

    press(){
        this.Praise();
        this.callback(el,this.num)
    }
}


new Thumb(2).Praise()