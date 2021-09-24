let mysong=document.getElementById("song");
let myicon=document.getElementById("icon")

myicon.onclick = function(){
    if(mysong.paused){
        mysong.play();
        myicon.src="pause.png"
    }
    else{
        mysong.pause();
        myicon.src="play.png"
    }
}
mysong.onended=function(){
    myicon.src="play.png";
}