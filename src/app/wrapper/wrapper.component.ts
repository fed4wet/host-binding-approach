import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ButtonTheme, ButtonV2Component} from "../button-v2/button-v2.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {TwitterIconComponent} from "../twitter-icon.component";
import {ButtonHugeComponent} from "../button-v3/button-huge.component";

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonV2Component, ButtonHugeComponent, BrowserAnimationsModule, MatButtonModule, TwitterIconComponent]
})
export class WrapperComponent {
  color: ButtonTheme = 'primary';

  change(mode: ButtonTheme): void {
    this.color = mode;

  }
}
