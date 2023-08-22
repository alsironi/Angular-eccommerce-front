import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  isVisible = false;

  showPopup(): void{
    this.isVisible = true;
  }

  hidePopup(): void{
    this.isVisible = false;
  }
}
