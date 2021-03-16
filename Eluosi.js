(function(){
  window.Game =function(){
    this.gameData=[];
    this.row=20;
    this.col=12;
    //表格初始化
    this.init();
    this.initArit();
    //图形初始化
    this.block = new Block;
    //窗口初始化
    this.blcokArit=new Block;
    //地图初始化
    this.map =new Map;
    //定时器
    this.start();
    //事件监听
    this.bilndEvent();
    //分数
    this.figure=0;
    //速度
    this.during=20;
  }
  //地图
  Game.prototype.init = function(){
    var $table=$("<table></table>")
    for(var i=0; i<this.row;i++){
      var $tr=$("<tr></tr>")
      for(var j=0;j<this.col;j++){
        var $td=$("<td></td>")
        $td.appendTo($tr)
      }
      $tr.appendTo($table)
    }
    $table.appendTo("body")
  },
    //预览窗口
  Game.prototype.initArit=function(){
    var $table=$("<table1 class='tab1'></table1>")
    for(var i=0; i<4;i++){
      var $tr=$("<tr></tr>")
      for(var j=0;j<4;j++){
        var $td=$("<td></td>")
        $td.appendTo($tr)
      }
      $tr.appendTo($table)
    }
    $table.appendTo("body")
  },
  Game.prototype.setColor= function(row,col,num){
    $("tr").eq(row).children("td").eq(col).addClass("c"+num)
  },
  Game.prototype.setColorAlir=function(i,j,num){
    // console.log('hello')
    $(".tab1").find("tr").eq(i).children("td").eq(j).addClass("c"+num)

  },
  Game.prototype.clear =function(){
    for(var i=0;i<this.row;i++){
      for(var j=0;j<this.col;j++){
        $("tr").eq(i).children("td").eq(j).removeClass()
      }
    }
  },
  Game.prototype.clearAlir =function(){
    for(var i=0;i<this.row;i++){
      for(var j=0;j<this.col;j++){
        $(".tab1").find("tr").eq(i).children("td").eq(j).removeClass()
      }
    }
  },
  Game.prototype.bilndEvent=function(){
    var self=this
    $(document).keydown(function(event){
    // console.log(event.keyCode)
    if(event.keyCode==37){
      self.block.changeLeft();
    }else if(event.keyCode==39){
      self.block.changeRight();
    }else if(event.keyCode==32){
      self.block.quickDown();
    }else if(event.keyCode==38){
      self.block.changeAuto();
    }
    })
    // console.log("这里是g")
  },
  //保存数据
  // Game.prototype.sveDate=function(){
  //   localStorage.gameData=JSON.stringify(this.gameData)
  // },
  Game.prototype.start=function(){
    var self = this;
    this.f=0;
    this.timer=setInterval(function(){
      self.f+=0.5;
      self.clear();
      self.clearAlir();
      //图形渲染
      self.block.render();
      //预览窗口渲染
      // self.block.renderAlro();
      //地图渲染
      self.map.render(self);
      //图形移动
      self.f % self.during==0 &&self.block.downChange();
      //消除已有行
      self.map.changeRemove();
      //游戏结束
      self.map.gameOver();
      // self.sveDate();
      // console.log(self.f)
      // console.log(self.during)
    },20)
  }
})()