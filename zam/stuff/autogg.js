register("chat", (player, event) => {
    ChatLib.chat("gg");
  }).setCriteria("gg").setContains();

  register("messageSent", (message, event) => {
    if (message.toLowerCase().includes("gg")) {
      ChatLib.chat("gg");
    }
  });

