(function(){
  window.Block= function(){ 
    // this.test1=[
    //     [0,1,1,0],
    //     [1,1,0,0],
    //     [0,0,0,0],
    //     [0,0,0,0]
    // ]
    var allType=["S","T","O","L","J","I","Z"];
    var type = allType[parseInt(Math.random()*allType.length)];
    this.allCode = fangKuai[type];
    this.codeRil = parseInt(Math.random()*this.allCode.length);
    this.code = this.allCode[this.codeRil];
    this.row=0;
    this.col=4;
    this.Ptwo=1;
    // console.log(this.code)
  }
  //地图
  Block.prototype.render = function(){
    for(var i=0;i<4;i++){
      for(var j=0;j<4;j++){
        if(this.code[i][j]!=0){
        // console.log(this.code[i][j]);
        game.setColor(i+this.row,j+this.col,this.code[i][j]);
        //预览窗口
        // game.setColorAlir(i,j,this.code[i][j]);
        // console.log(game.blcokArit.code)
        }
        if(game.blcokArit.code[i][j]!=0){
          game.setColorAlir(i,j,game.blcokArit.code[i][j]);
        }
      }
    }
  },
  Block.prototype.change=function(row,col){
    for(var i=0;i<4;i++){
      for(var j=0;j<4;j++){
        if(this.code[i][j]!=0&&game.map.Map[i+row][j+col]!=0){
          return false;
        }
      }
    }
    return true;
  },
  //地图板块变化
  Block.prototype.downChange=function(){
    // console.log(game.map.Map[5][6])
    // console.log(game.uu)
    if(game.uu==true){
    if(this.change(this.row+1,this.col)){
      // console.log(this.change(this.row+1,this.col))
      this.row++;
    }
    else{
      game.block = new Block;
      game.block = game.blcokArit;
      game.blcokArit= new Block;
      this.renderMap();
    }
    }
  },
    Block.prototype.renderMap = function(){
    for(var i=0;i<4;i++){
      for(var j=0;j<4;j++){
        if(this.code[i][j]!==0){
          // console.log(3)
          game.map.Map[i+this.row][j+this.col]=this.code[i][j]
        }
        }
      }
    },
    //块级位置转换向左
    Block.prototype.changeLeft = function(){
    // console.log("hello")
    if(this.change(this.row,this.col-1)){
      // console.log(this.col)
      this.col--;
    }
    },
     //块级位置转换向右
      Block.prototype.changeRight = function(){
      // console.log("hello")
      if(this.change(this.row,this.col+1)){
        this.col++;
      }
      },
      //块级快快进
      Block.prototype.changeDown = function(){
        if(this.change(this.row+1,this.col)){
          this.row++;
        }
      }
      //作弊神器
      Block.prototype.changeUp = function(){
        if(this.change(this.row-1,this.col)){
          this.row--;
        }
      }
     //块级位置迅速下降
      Block.prototype.quickDown = function(){
      // console.log("hello")
      while(this.change(this.row+1,this.col)){
        // if(this.col!=10){
        //   console.log(this.col)
        //   this.row++;
        // }
        this.row++;
      }
      },
        //块级转换位置
      Block.prototype.changeAuto = function(){
        // console.log(this.code)
        var oldCodeRil = this.codeRil;
        this.codeRil++;
        if(this.codeRil>this.allCode.length-1){
          this.codeRil=0;
        }
        this.code=this.allCode[this.codeRil];
        if(!this.change(this.row,this.col)){
          this.codeRil = oldCodeRil;
          this.code=this.allCode[this.codeRil];
        }
        // console.log(this.codeRil)
      }
})()