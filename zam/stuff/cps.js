const leftClicks = CPS.getLeftClicks();
const rightClicks = CPS.getRightClicks();
const display = new Display();

register("tick", () => {
    display.setLine(0, "CPS: " + CPS.getLeftClicks());
});

// HOLY SHIT I DID WORKING CPS WOOOOOOO
 
display.addLine(rightClicks)
display.addLines(2);
display.addLine(leftClicks)

