$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms

  createPlatform(200, 650, 200, 20, "pink");
createPlatform(450, 600, 200, 20, "pink");
createPlatform(700, 500, 200, 20, "pink");
createPlatform(950, 450, 200, 20, "pink");
createPlatform(1200, 400, 200, 20, "pink");


    // TODO 3 - Create Collectables

createCollectable("diamond", 360, 610);
createCollectable("diamond", 610, 560);
createCollectable("diamond", 860, 460);
createCollectable("diamond", 1110, 410);
createCollectable("diamond", 1360, 360);



    
    // TODO 4 - Create Cannons

createCannon("top", 200, 2000);
createCannon("right", 300, 2000);
createCannon("right", 510, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
