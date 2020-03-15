import { observable, action } from "mobx";

export default class ThemeStore {
  @observable
  themeColor = "brown";

  @action.bound
  toggleThemeColor() {
    this.themeColor = this.themeColor == "brown" ? "black" : "brown";
  }
}
