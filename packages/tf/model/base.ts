import { Layer } from "../layers/base";
import { revTopSort } from "./topsort";

export class Model {
  name?: string;
  layers: Layer[] = [];

  constructor({ name, layers }: { name?: string; layers: Layer[] }) {
    this.name = name;
    this.layers = layers;
  }

  static of(d: { name?: string; layers: Layer[] }) {
    return new Model(d);
  }

  setName(name: string) {
    this.name = name;
  }

  compile(): string {
    const revSorted = revTopSort(this.layers);

    const importStack: string[] = [];
    const codeStack: string[] = [];

    for (const layer of revSorted) {
      const { code, link } = layer.compileLayer();
      importStack.push(link);
      codeStack.push(code);
    }
    //TODO: i guess we need to pop
    // using Set to remove duplicates from the importStack
    const imports = Array.from(new Set(importStack)).join("\n");

    const code = codeStack.join("\n");

    return `${imports}\n\n${code}`;
  }
}
