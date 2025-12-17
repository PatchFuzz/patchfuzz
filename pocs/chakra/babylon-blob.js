import { reservedWords } from "../util/identifier";
import { getOptions } from "../options";
import Tokenizer from "../tokenizer";

export const plugins = {};

export default class Parser extends Tokenizer {
  constructor(options, input) {
    options = getOptions(options);
    super(options, input);

    this.options = options;
    this.inModule = this.options.sourceType === "module";
    this.input = input;
    this.plugins = this.loadPlugins(this.options.plugins);
    this.filename = options.sourceFilename;

    
    if (this.state.pos === 0 && this.input[0] === "#" && this.input[1] === "!") {
      this.skipLineComment(2);
    }
  }

  isReservedWord(word) {
    if (word === "await") {
      return this.inModule;
    } else {
      return reservedWords[6](word);
    }
  }

  hasPlugin(name) {
    return !!this.plugins[name];
  }

  extend(name, f) {
    this[name] = f(this[name]);
  }

  loadPlugins(pluginList) {
    const pluginMap = {};

    if (pluginList.indexOf("flow") >= 0) {
      
      pluginList = pluginList.filter((plugin) => plugin !== "flow");
      pluginList.push("flow");
    }

    if (pluginList.indexOf("estree") >= 0) {
      
      pluginList = pluginList.filter((plugin) => plugin !== "estree");
      pluginList.unshift("estree");
    }

    for (const name of pluginList) {
      if (!pluginMap[name]) {
        pluginMap[name] = true;

        const plugin = plugins[name];
        if (plugin) plugin(this);
      }
    }

    return pluginMap;
  }

  parse() {
    const file = this.startNode();
    const program = this.startNode();
    this.nextToken();
    return this.parseTopLevel(file, program);
  }
}
