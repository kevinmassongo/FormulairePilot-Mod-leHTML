import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  template: `
    <p>
      parent works!
    </p>
  `,
  styles: ``
})
export class ParentComponent {
  @Input() donnees !: string;
}
