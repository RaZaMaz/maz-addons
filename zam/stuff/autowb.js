register("chat", (player, event) => {
    ChatLib.chat("/gc wb!");
  }).setCriteria("wb").setContains();

  register("messageSent", (message, event) => {
    if (message.toLowerCase().includes("wb")) {
      ChatLib.chat("/gc wb!");
    }
  });

