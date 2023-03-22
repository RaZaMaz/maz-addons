function hasSponge() {
    const inventory = Player.getInventory();
  
    // The ID for sponge is 19.
    const spongeSlot = inventory.indexOf(19);
  
    if (spongeSlot !== -1) {
      ChatLib.chat("Sponge found in slot " + spongeSlot + "!");
    } else {
      ChatLib.chat("Sponge not found!");
    }
  }