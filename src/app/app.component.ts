import { Component } from '@angular/core';

type NewType = boolean;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngIf';

  isValid="true";

  onchange(val:any)
  {
    this.isValid=val;
  }
}
