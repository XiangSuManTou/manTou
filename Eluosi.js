console.log("被你发现了鸭，没办法了，悄悄告诉你，你是最可爱的hhh🥳")
function buttonBegin(){
  // console.log("hello")
  this.submit()
  // this.game.reGame++;
  // console.log(this.game.reGame)
  // document.getElementById("begin").setAttribute("disabled", true);
  // document.getElementById("begin").innerHTML="重新游戏"
}
function P(){
  this.game.map.turnT()
};
function reGame(){
  this.game.clearMap()
  this.game = new Game(); 
}
function over(){
  alert("GameOver")
  clearInterval(this.game.timer);
  document.getElementById("begin").removeAttribute("disabled");
  document.getElementById("begin").innerHTML="开始游戏"
  this.game.clearMap()
  this.Fu()
  this.game.figure=0
  document.getElementById("figure").innerHTML="分数:"+game.figure;
  
};
function submit(){
  var name =$("#userName").val();
  // console.log(name)
  if(name==""){
    alert("请输入玩家名称");
  }else{
    this.game = new Game(); 
    document.getElementById("begin").setAttribute("disabled", true);
    document.getElementById("begin").innerHTML="重新游戏"
    this.username=name
  }
  // this.userFigure.push([{user:"user",}])
  // this.userFigure.splice()
  // this.saveDate();
};
function Fu(){
  for(var i=0;i<this.game.row;i++){
    for(var j=0;j<this.game.col;j++){
      $(".tab1").find("tr").eq(i).children("td").eq(j).removeClass()
    }
  }
}
//清楚数据
function clareFigure(){ 
  window.userFigure.splice(0,window.userFigure.length);
  window.saveDate();}
function math(){
  // document.getElementsByClassName("GameUser")[0].innerHTML=window.userFigure[0].userName+":" +window.userFigure[0].gameFigure+"分"+"&nbsp"+"时间:"+window.userFigure[0].dateTime;
  //排序
  var newFigure = this.userFigure
  newFigure.sort(function(b,a){
    if(a["gameFigure"]>b["gameFigure"]){ return 1}
    else if(a["gameFigure"]===b["gameFigure"]){ return 0}
    else if(a["gameFigure"]<b["gameFigure"]){ return -1}
  });
  // console.log(newFigure)
  var arrayKey = Object.keys(this.userFigure);
  var arrayValue = Object.values(this.userFigure)
  var funnDiv = document.getElementById("GameUser")
  // console.log(arrayKey)
  // console.log(arrayValue)
  for(var i=0;i<arrayKey.length;i++){
    // console.log(arrayValue[i])
    var funDiv = document.createElement("div");
    funDiv.className="fumDiv";
    funnDiv.appendChild(funDiv);
    document.getElementsByClassName("fumDiv")[i].innerHTML=window.userFigure[i].userName+":" +"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+window.userFigure[i].gameFigure+"分"+"&nbsp"+"&nbsp"+"&nbsp"+window.userFigure[i].dateTime;
    // console.log(document.getElementsByClassName("fumDiv")[i].innerHTML)
  }
  
  // console.log(funDiv)
  // console.log(funnDiv)
}
(function(){
  window.Game =function(){
    this.reGame=0;
    this.row=20;
    this.col=12;
    //表格初始化
    // if(this.reGame==0){
    //   this.init();
    //   this.initArit();
    // }
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
    this.uu=true;
  },
  //地图
  // Game.prototype.init = function(){
  //   var $table=$("<table></table>")
  //   for(var i=0; i<this.row;i++){
  //     var $tr=$("<tr></tr>")
  //     for(var j=0;j<this.col;j++){
  //       var $td=$("<td></td>")
  //       $td.appendTo($tr)
  //     }
  //     $tr.appendTo($table)
  //   }
  //   $table.appendTo("body")
  // },
  //   //预览窗口
  // Game.prototype.initArit=function(){
  //   var $table=$("<table1 class='tab1'></table1>")
  //   for(var i=0; i<4;i++){
  //     var $tr=$("<tr></tr>")
  //     for(var j=0;j<4;j++){
  //       var $td=$("<td></td>")
  //       $td.appendTo($tr)
  //     }
  //     $tr.appendTo($table)
  //   }
  //   $table.appendTo("body")
  // },
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
  Game.prototype.clearMap = function(){
    for(var i=0;i<20;i++){
      for(var j=0;j<12;j++){
        $("tr").eq(i).children("td").eq(j).removeClass()
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
    }else if(event.keyCode==16){
      self.block.quickDown();
    }else if(event.keyCode==38){
      self.block.changeAuto();
    }else if(event.keyCode==80){
      self.map.turnT();
    }else if(event.keyCode==40){
      self.block.changeDown();
    }else if(event.keyCode==90){
      self.block.changeUp();
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
      // console.log(self.uu)
    },20)
  }
  // Game.prototype.start=function(){
  //   var self = this;
  //   this.f=0;
  //   this.timer=setInterval(function(){
  //     self.f+=0.5;
  //     self.clear();
  //     self.clearAlir();
  //     //图形渲染
  //     self.block.render();
  //     //预览窗口渲染
  //     // self.block.renderAlro();
  //     //地图渲染
  //     self.map.render(self);
  //     //图形移动
  //     self.f % self.during==0 &&self.block.downChange();
  //     //消除已有行
  //     self.map.changeRemove();
  //     //游戏结束
  //     self.map.gameOver();
  //     // self.sveDate();
  //     // console.log(self.f)
  //     // console.log(self.during)
  //     // console.log(self.uu)
  //   },20)
  // }
  // console.log(this)
})();
// console.log(this)