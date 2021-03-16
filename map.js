(function(){
  window.Map = function(mapCode){
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
        console.log(game.during)
      }
    }
  },
  Map.prototype.gameOver= function(){
    // console.log(game.col)
    for(var i=0;i<game.col-1;i++){
      if(this.Map[1][i]!=0){
        game.gameDate=[game.figure]
        console.log(game.gameDate)
        clearInterval(game.timer);
        alert('Game Over');
      }
    }
  }
})()