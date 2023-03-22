register("chat", (player) => {
    ChatLib.command(`party accept RaZaMaz`);
  }).setCriteria("invited to a party by RaZaMaz").setContains();