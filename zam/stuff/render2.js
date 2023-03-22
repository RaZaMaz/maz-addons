const gui = new Gui();

gui.registerDraw(myGuiRenderFunction);

function myGuiRenderFunction(mouseX, mouseY, partialTicks) {
  Renderer.drawRect(Renderer.WHITE, mouseX, mouseY, 50, 50);
}

