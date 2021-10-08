

function download(){
    var download = document.getElementById("download");
    var image = document.getElementById("CANVAS").toDataURL("image/png").replace("image/jpg", "image/octet-stream");
    download.setAttribute("href", image);
    //download.setAttribute("download","archive.png");
}

function myFunction() {
    var video = document.querySelector("video");
    var x1 =  document.getElementById("CANVAS-temp");
    var ctx1 = x1.getContext("2d");
    ctx1.fillStyle = "#FF0000";
    ctx1.drawImage(video, 0, 0, x1.width, x1.height);
    document.body.appendChild(x1);
    var x =  document.getElementById("CANVAS") ;
    var ctx = x.getContext("2d");
    
    var widthx = video.clientWidth/2;
    var heighty = video.clientHeight/2;
    ctx.fillStyle = "#FF0000";
    //ctx.fillRect(20, 20, 150, 100);
    ctx.drawImage(x1, 0, 0, widthx, heighty, 0, 0, x.width, x.height);
    document.body.appendChild(x);
      
    
}
