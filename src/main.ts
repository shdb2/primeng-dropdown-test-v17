import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
     <p-dropdown [options]="items"
                 placeholder="Select item"></p-dropdown>
  `,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
  ],
})
export class App {
  selectedItem?: number;
  name = 'Angular';
  items: { label: string; value: number }[] = [];

  constructor() {
    for (let i = 0; i < 10000; i++) {
      this.items.push({ label: 'Item ' + i, value: i });
    }
  }
}

bootstrapApplication(App);
