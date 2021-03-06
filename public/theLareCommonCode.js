var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options); 
}

var drawingRoom = vRViewPlayer('#first-vr-example', {
  // image: 'https://commons.wikimedia.org/wiki/File:Langkawi_Sky_Bridge_Photosphere.jpg',
  image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Tana_Baru_Cemetery_Photosphere_02.jpg',
  is_stereo: false
});

window.addEventListener('load', drawingRoom);

var setReadyEvents = function(event) {
  console.log('adding on "ready" events');

  drawingRoom.addHotspot('spot1', {
    pitch: 0,
    yaw: 90,
    radius: 0.10,
    distance: 1
  });

  drawingRoom.addHotspot('spot2', {
    pitch: 0,
    yaw: 180,
    radius: 0.10,
    distance: 1
  });

  drawingRoom.addHotspot('spot3', {
    pitch: 0,
    yaw: 270,
    radius: 0.10,
    distance: 1
  });
  
  drawingRoom.addHotspot('spot4',{
    pitch:0,
    yaw: 360,
    radius: 0.10,
    distance:1   
});

var setOnClickEvents = function(event) {
  if (event.id == 'spot1') {
    alert("Spot1")
  }

  if (event.id == 'spot2') {
    alert('Spot2');
  }

  if (event.id == 'spot3') {
    alert(' ?? ');
  }
};

// when the page is ready, do these events
drawingRoom.on('ready', function(event) {
  setReadyEvents(event);
});

// when you click, do these events
drawingRoom.on('click', function(event) {
  setOnClickEvents(event);
});

// when there is an error, do these events
drawingRoom.on('error', function(errorEvent) {
  console.log('there was an error', errorEvent);
});

