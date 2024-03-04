import { activation } from "./activation";
import { batch_normalisation } from "./batch_normalisation";
import { concatenate } from "./concatenate";
import { dense } from "./dense";
export * from "./input";

export const layers = [activation, batch_normalisation, concatenate, dense];
