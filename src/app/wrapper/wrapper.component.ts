import {Component} from '@angular/core';
import {ButtonTheme, ButtonV2Component} from "../button-v2/button-v2.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatButtonModule} from "@angular/material/button";
import {TwitterIconComponent} from "../twitter-icon.component";

@Component({
    selector: 'app-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.css'],
    standalone: true,
    imports: [ButtonV2Component, BrowserAnimationsModule, MatButtonModule, TwitterIconComponent]
})
export class WrapperComponent {
    selectedTheme: ButtonTheme = 'primary';

    change(mode: ButtonTheme): void {
        this.selectedTheme = mode;

    }
}
