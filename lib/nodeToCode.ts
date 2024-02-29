import { Layer as L } from "@/packages/tf/types";

export function nodeToCode(layer: L, id: string) {
  let code = `from tensorflow.keras.layers import ${layer.nameTf}";\n\n`;
  code += `const ${layer.name}_${id} = ${layer.nameTf}(######){\n`;
  code += ``;
  code += `\n});\n`;
  return code;
}
