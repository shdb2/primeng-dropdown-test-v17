import {Component, importProvidersFrom} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {bootstrapApplication} from '@angular/platform-browser';
import 'zone.js';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
        Primitive number options, editable:<br>
        <p-dropdown [options]="items"
                    [editable]="true"
                    placeholder="Select item"></p-dropdown>
        <br>
        <br>
        Primitive number options, filter:<br>
        <p-dropdown [options]="items"
                    [filter]="true"
                    placeholder="Select item"></p-dropdown>
    `,
    imports: [
        DropdownModule,
        FormsModule,
    ],
})
export class App {
    name = 'Angular';
    items: number[] = [];
    
    constructor() {
        for (let i = 0; i < 100; i++) {
            this.items.push(i);
        }
    }
}

bootstrapApplication(App, {
    providers: [
        importProvidersFrom(BrowserAnimationsModule),
    ],
});
