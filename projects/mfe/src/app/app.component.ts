import { Component } from '@angular/core';

@Component({
  selector: 'mfe-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mfe';

  search(): void {
    alert('Not implemented in this demo!');
  }
}
