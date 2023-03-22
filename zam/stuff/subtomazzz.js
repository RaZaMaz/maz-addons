register("renderOverlay", myRenderOverlay);

const text = new Text("sub to mazzz", 69, 69);

let exampleImportStep = 0;
function myRenderOverlay() {
  text.setColor(Renderer.getRainbow(exampleImportStep));
  text.draw();

  exampleImportStep++;
}