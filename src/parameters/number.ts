import { Optionality } from "../helpers";
import PathParamDescription from "../PathParamDescription";

export default function uuid<TName extends string = string, TOptionality extends Optionality = "required">(
    name: TName,
    optsOrOptionality?:
        | {
              optionality?: TOptionality;
          }
        | TOptionality,
) {
    let optionality: TOptionality;
    if (typeof optsOrOptionality === "string") {
        optionality = optsOrOptionality;
    } else {
        optionality = optsOrOptionality?.optionality ?? ("required" as TOptionality);
    }

    const number = "[0-9]+";

    return new PathParamDescription({ name, optionality, pattern: number });
}
