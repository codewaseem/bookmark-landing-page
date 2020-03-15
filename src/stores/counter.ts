// src/stores/counter-store.tsx
import { observable, action, computed } from "mobx";

export default class CounterStore {
  @observable
  count = 0;

  @action.bound
  increment() {
    this.count++;
  }

  @action.bound
  decrement() {
    this.count--;
  }

  @computed
  get doubleCount() {
    return this.count * 2;
  }
}
