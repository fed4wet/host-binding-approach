import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input, ViewEncapsulation,
} from '@angular/core';

export type ButtonTheme = 'primary' | 'secondary';

@Component({
    selector: 'button[huge-button]',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./button-huge.component.scss'],
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    template: `
        <ng-content></ng-content>`,
})
export class ButtonHugeComponent {
    @Input() color: ButtonTheme = 'secondary';

    @HostBinding('class') get buttonClass(): string {
        const classes = ['huge-button', `btn-huge-${this.color}`];
        return classes.filter(Boolean).join(' ');
    }

}
