import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
    <img src="{{imageUrl}}" />
    <div>
    <button
    class="btn btn-primary btn-lg"
    [class.disabled]="!isValid">Submit</button>
    </div>
    <p></p>
   <div>
   <button type="button" class="btn btn-danger" (click)="onClickMe($event)">Danger</button>
</div>
    `
})
export class AppComponent {
  isValid = false;
  title = 'Demo of Angular 2 bindings';
  imageUrl = "https://www.w3schools.com/html/pic_mountain.jpg";
  onClickMe($event) {
    console.log("Watch out",$event)
  }
}
