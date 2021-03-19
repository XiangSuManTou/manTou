(function(){
  window.Map = function(mapCode){
    this.gameBurr=false;
    this.Map=[
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [9,9,9,9,9,9,9,9,9,9,9,9]
    ]
  },
  Map.prototype.render=function(mapCode){
    for(var i=0;i<mapCode.row;i++){
      for(var j=0;j<mapCode.col;j++){
        if(this.Map[i][j]!=0){
        game.setColor(i,j,this.Map[i][j]);
        }
        // $("tr").eq(i).children("td").eq(j).html(this.Map[i][j])
        }
      }
    },
  Map.prototype.changeRemove=function(){
    for(var i=0;i<20;i++){
      if(this.Map[i].indexOf(0)== -1){
        this.Map.splice(i,1);
        this.Map.unshift( [0,0,0,0,0,0,0,0,0,0,0,0],);
        // console.log('hello')
        game.figure =game.figure+10;
        // console.log(game.figure)
        document.getElementById("figure").innerHTML="分数:"+game.figure;
        game.during-=0.5;
        if(game.during==0){
          game.during-=0.1;
        }
        if(game.during<17){
          game.figure+=40
        }else if(game.during<16){
          game.figure+=160
        }else if(game.during<10){
          game.figure+=200
        }else if(game.during<5){
          game.figure+=400
        }
        // console.log(game.during)
      }
    }
  },
  Map.prototype.gameOver= function(){
    // console.log(game.col)
    var date=new Date();
    var dateTime=date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+" "+date.getHours()+":"+date.getHours()+":"+date.getSeconds();
    for(var i=0;i<game.col-1;i++){
      if(this.Map[0][i]!==0){
        clearInterval(game.timer);
        window.Fu();
        game.map.gameBurr=true
        }
      }
      if(game.map.gameBurr==true){
        var result = confirm( "Game Over，Re a Game?" );
        if ( result ) {
          game.clearMap();
          document.getElementById("begin").removeAttribute("disabled");
          document.getElementById("begin").innerHTML="开始游戏"
          window.userFigure.push({
            userName:window.username,
            gameFigure:game.figure,
            dateTime:dateTime,
            })
            window.saveDate();
            window.math();
          // console.log(window)
          } else {
      // the user clicked cancel or closed the confirm dialog.  
            window.userFigure.push({
            userName:window.username,
            gameFigure:game.figure,
            dateTime:dateTime,
            })
            // console.log(window.userName,game.figure,dateTime);
            window.saveDate();
            // console.log(localStorage.userFigure,window.userFigure);
            alert("游戏结束"+"\n"+window.username+"\n"+"得分:"+game.figure+"!"+"\n"+"对了悄悄告诉你z键可以往上走，没想到把hh")
            game.clearMap();
            window.Fu();
            document.getElementById("begin").removeAttribute("disabled");
            document.getElementById("begin").innerHTML="开始游戏"
            // this.userFigure.push({
            //   userName:this.user,
            //   gameFigure:game.figure,
            //   dateTime:this.dateTime,
            // })
            window.math();
          }
    }},
  Map.prototype.turnT=function(){
        if(game.uu==false){
          game.uu=!game.uu;
        }else if(game.uu==true){
          game.uu=false;
        }
  }
  Map.prototype.He=function(){
    // console.log("action")
  }
  
})()