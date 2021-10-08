
'use strict';

var videoElement = document.querySelector('video');
var videoSelect = document.querySelector('select#videoSource');

navigator.getUserMedia = navigator.getUserMedia ||
  navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  
function gotSources(sourceInfos) {
  for (var i = 0; i !== sourceInfos.length; ++i) {
    var sourceInfo = sourceInfos[i];
    var option = document.createElement('option');
    option.value = sourceInfo.deviceId;
    if (sourceInfo.kind === 'videoinput') {
      option.text = sourceInfo.label || 'camera ' + (videoSelect.length + 1);
      videoSelect.appendChild(option);
    } else {
      console.log('Some other kind of source: ', sourceInfo);
    }
  }
}

if (!navigator.mediaDevices) {
  alert('This browser does not support MediaStreamTrack.getSources().');
} else {
  navigator.mediaDevices.enumerateDevices().then(function(e) {
    gotSources(e);
  });
}

function successCallback(stream) {
  window.stream = stream; // make stream available to console
  videoElement.srcObject=stream;
  videoElement.play();
  var x =  document.getElementById("CANVAS-temp");
  x.width = 1280;
  x.height = 960;
  alert(x.height);
  var ctx1 = x.getContext("2d");
  ctx1.translate(x.width, 0);
  ctx1.scale(-1, 1);
}

function errorCallback(error) {
  console.log('navigator.getUserMedia error: ', error);
}

function start() {
  if (window.stream) {
    videoElement.src = null;
    window.stream.getTracks().forEach(function(track) {
      track.stop();
    });
  }
  var videoSource = videoSelect.value;

  var constraints = {
    video: {
      optional: [{
        sourceId: videoSource
      }]
    }
  };
  navigator.getUserMedia(constraints, successCallback, errorCallback);
  
}


videoSelect.onchange = start;

start();
