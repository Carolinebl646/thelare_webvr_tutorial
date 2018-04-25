var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options); 
}

var drawingRoom = vRViewPlayer('#first-vr-example', {
  // image: 'https://commons.wikimedia.org/wiki/File:Langkawi_Sky_Bridge_Photosphere.jpg',
  image: 'https://pasteboard.co/images/Hhf0Wxd.jpg/download',
  is_stereo: false
});

window.addEventListener('load', drawingRoom);


