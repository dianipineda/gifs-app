import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedService {
  private optionsList: string[] = [];
  constructor() {}

  get getteroptionsList() {
    return [...this.optionsList];
  }

  addOption(option: string) {
    this.optionsList.push(option);
  }
}
