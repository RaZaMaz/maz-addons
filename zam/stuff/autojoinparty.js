register("chat", (player, event) => {
    ChatLib.chat("/party accept");
  }).setCriteria("You have 60 seconds to accept.").setContains();

  register("messageSent", (message, event) => {
    if (message.toLowerCase().includes("You have 60 seconds to accept.")) {
      ChatLib.chat("/party accept ");
    }
  });

