var sprinting = true;
var KeyBinding = Java.type("net.minecraft.client.settings.KeyBinding");
var toggle = new KeyBind("Toggle Sprint", Keyboard.KEY_X);

var key = Client.getMinecraft().field_71474_y.field_151444_V.func_151463_i();

register("renderOverlay", "SprintOverlay");
register("tick", "SprintTick");
function SprintTick() {
	if(toggle.isPressed()) {
		sprinting = !sprinting;
		if(!sprinting) {
			if(key > 0) {
				KeyBinding.func_74510_a(key, Keyboard.isKeyDown(key));
			}
		}
	}
	if(sprinting) {
		KeyBinding.func_74510_a(key, true);
	}
}

function SprintOverlay() {
	if(!sprinting) return;
	
	var width = Renderer.screen.getWidth();
	var height = Renderer.screen.getHeight();
	
	Renderer.drawString("[Sprinting Toggled]", 1, height - Client.getMinecraft().field_71466_p.field_78288_b);
}