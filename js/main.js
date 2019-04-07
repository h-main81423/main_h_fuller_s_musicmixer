console.log("linked JS");

// using the Self Executing Function to limit the scope of the following variables to local
	(function() {
//console.log("self executing function is working");
  
//variablesarray
//creating dropzone and icon,zone with local let statements
  let dropZone = document.querySelector("#figureContainer");
      dragIcons = document.querySelectorAll(".musicNav div");
  
// var animations ["figure.gif"]
// functions list
    function dragStart (e) {
// using this function to transfer text data in order to start the drag process
      e.dataTransfer.setData('text', e.target.dataset.audiosrc);
// debugger;
//console.log("its draggin");
                                    
   }
// all three events need default to stop default from taking place before being handled
     function dragOv(e) {
//console.log("draggin over it")
    
      e.preventDefault();
  }

    function dragNd() {
      e.preventDefault();
//console.log("stopped draggin");
  }
    
  function dropped(e) {
//console.log("dropped");
//need default to stop default from taking place before being handled by drag over
    e.preventDefault();
    
// audio element playback and creation
    
    let targetSrc = e.dataTransfer.getData("text");
   

    let audioElement = document.createElement("audio");

    audioElement.src = `audio/${targetSrc}`;
    audioElement.load();
    audioElement.play();

  }

// event listeners
    dragIcons.forEach(icon => {
      icon.addEventListener("dragstart", dragStart);
  })

    dropZone.addEventListener("dragover", dragOv);    
    dropZone.addEventListener("drop", dropped);

    
})();