register("chat", (player, event) => {
    ChatLib.chat("WHAT DA FRICK!!" + player);
  }).setCriteria("wtf").setContains();

  register("messageSent", (message, event) => {
    if (message.toLowerCase().includes("wtf")) {
      ChatLib.chat("WHAT DA FRICK!!");
    }
  });

