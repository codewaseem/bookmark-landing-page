import { observable } from "mobx";

export default class ThemeStore {
  @observable
  fontSize = `18px`;

  @observable
  colors = {
    softBlue: `hsl(231, 69%, 60%)`,
    softRed: ` hsl(0, 94%, 66%)`,
    grayishBlue: `hsl(229, 8%, 60%)`,
    veryDarkBlue: `hsl(229, 31%, 21%)`,
  };

  headingSizes = {
    h1: `1.75rem`,
  };
}
