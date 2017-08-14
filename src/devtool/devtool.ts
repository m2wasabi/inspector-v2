///<reference path="../../node_modules/@types/filewriter/index.d.ts"/>
///<reference path="../../node_modules/@types/filesystem/index.d.ts"/>
///<reference path="../../node_modules/@types/chrome/index.d.ts"/>
import DevtoolSocket from "../common/sockets/DevtoolSocket";
import DevtoolWindowFrameObserver from "./DevtoolWindowFrameObserver";
import RootSelectorConnectorProvider from "../UI/controller/RootSelectorConnectorProvider";
import DevtoolAll from "../UI/view/devtool-all";
import "../common_main";
const ds = new DevtoolSocket();
// Set data providers for devtool UI
const fm = new DevtoolWindowFrameObserver(ds);
RootSelectorConnectorProvider.windowObserver = fm;

DevtoolAll("#devtool");

