import Settings from "./config";
import { Color } from "Vigilance";

// to open the config gui use the "openGUI" function
register("command", () => Settings.openGUI()).setName("magic");

// to read/write config values, simply read/write them like normal js values
Settings.myColor = Color.RED;
console.log(Settings.textInput)