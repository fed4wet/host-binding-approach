import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input, ViewEncapsulation,
} from '@angular/core';

export type ButtonTheme = 'primary' | 'secondary';

@Component({
    selector: 'button[shared-button], a[shared-button],  p[shared-button]',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./button-v2.component.scss'],
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    template: `
        <ng-content></ng-content>`,
})
export class ButtonV2Component {
    @Input() buttonTheme: ButtonTheme = 'secondary';

    @HostBinding('class') get buttonClass(): string {
        const classes = ['button', `btn-${this.buttonTheme}`];
        return classes.filter(Boolean).join(' ');
    }

}
