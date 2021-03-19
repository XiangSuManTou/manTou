this.userId=0;
this.username="";
// +date.getMonth()+date.getDate()+date.getHours()+date.getHours()+date.getSeconds()
this.userFigure=[];
function saveDate(){
  localStorage.userFigure = JSON.stringify(this.userFigure) 
}

