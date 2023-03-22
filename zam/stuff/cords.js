const direction = Player.facing();
const playerX = Player.getX();
const playerY = Player.getY();
const playerZ = Player.getZ();
const health = Player.getHP();
const hunger = Player.getHunger();
const potions = Player.getActivePotionEffects();
const xpLevel = Player.getXPLevel();

register("tick", locationTracker);

const display = new Display();
display.setRenderLoc(10, 10);

let showCoords = false; // flag to keep track of whether coordinates are currently being displayed

function locationTracker() {
  if (showCoords) {
    display.setLine(0, "X: " + Player.getX());
    display.setLine(1, "Y: " + Player.getY());
    display.setLine(2, "Z: " + Player.getZ());
    display.show(); // show the coordinates display if the flag is true
  } else {
    display.hide(); // hide the coordinates display if the flag is false
  }
}

register("command", (sender, label, args) => {
  if (label && label.toLowerCase() === "cords") { // add a check for label existence
    showCoords = !showCoords; // toggle the flag
    if (showCoords) {
      ChatLib.chat("Coordinates display enabled");
    } else {
      ChatLib.chat("Coordinates display disabled");
    }
    return true;
  }
}).setName("cords");



