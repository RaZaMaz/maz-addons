import "./stuff/discord"
import "./stuff/cps"
import "./stuff/openguiold"
import "./stuff/render2"
import "./stuff/inventory"
import "./stuff/inventory"
import "./stuff/cords"
import "./stuff/subtomazzz"
import "./stuff/whatdafrick"
import "./stuff/autogg"
import "./stuff/razamazaccept"
import "./stuff/autowb"



ChatLib.chat("§6Hey! Looks like your using the §lMAZ ADDONS§r§6 mod! Which was created by me! Maz#7097 on discord! In case you wanted to get updates or learn more about the mod here is my youtube channel and my discord! Just click the button below to be re-directed and if you have any suggestions or just wanna talk to me. Join the discord!")

const clickableMessage2 = new Message(
  new TextComponent("§c§l[YOUTUBE]§l§c").setClick(
    "open_url",
    "https://www.youtube.com/channel/UCq6mZfSU79HVPM4RCex_P7A"
  ),
  "§c§l!"
);

ChatLib.chat(clickableMessage2);






const clickableMessage = new Message(
  new TextComponent("§5§l[DISCORD]§l§5").setClick(
    "open_url",
    "https://discord.gg/mgZJPWM8"
  ),
  "§5§l!"
);

ChatLib.chat(clickableMessage);





/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />

const GuiTextField = Java.type("net.minecraft.client.gui.GuiTextField");

let searchBar = new GuiTextField(0, Client.getMinecraft().field_71466_p,  25, 25, 100, 10);

let searchTerm = "";

register("tick", () => {
  if (!Client.isInGui()) {
    searchBar.func_146195_b(false) // setfocused
  } else {
    searchTerm = searchBar.func_146179_b()
  }
})

register("guiRender", () => {
  try {
    if(Player.getOpenedInventory().getName().includes("Chest")) {
      searchBar.func_146194_f(); // draw text box
    }
  } catch (e) {

  }
})

register("guiMouseClick", (x, y, button) => {
  searchBar.func_146192_a(x, y, button); // detect when click text box
})

register("guiKey", (char, keyCode, gui, event) => {
  if (searchBar.func_146206_l()) { // if text box is focused
    searchBar.func_146201_a(char, keyCode) // add character to text box
    if (keyCode != 1) { // keycode for escape key
      cancel(event)
    }
  }
})

/* Originally from Debuggings */
register('guiRender', (gui) => {
    if(Player.getPlayer() === null || Player.getOpenedInventory() === null) return;
    const items = Player.getOpenedInventory().getItems();
    if (!items) return;
    items.forEach((item, index) => {
      if (!item) return; // check if item is null or undefined
      let maxSlot = Player.getOpenedInventory().getSize() - 36;
      if(index <= maxSlot && (item.getRawNBT().toLowerCase().removeFormatting().includes(searchTerm.toLowerCase()) || item.getName().toLowerCase().removeFormatting().includes(searchTerm.toLowerCase())) && searchTerm && !item.getRawNBT().removeFormatting().includes('id:"minecraft:air"')) {
        /* Code from ExperimentationTable */
        const x = index % 9;
        const y = Math.floor(index / 9);
        const renderX = Renderer.screen.getWidth() / 2 + ((x - 4) * 18);
        const renderY = (Renderer.screen.getHeight() + 10) / 2 + ((y - Player.getOpenedInventory().getSize() / 18) * 18);
  
        Renderer.translate(0, 0, 100);
        Renderer.drawRect(Renderer.color(0, 255, 127, 100), renderX-9, renderY-9, 17, 17);
        /* ------------------------------ */
      }
    });
  });
  



//// all of the stuff above not including the imports was for the chest gui thing and then


