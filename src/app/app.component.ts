import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Practice';



  // ############### For Finding Screen Width continously  ############### 
  // public innerWidth: any;
  // @HostListener('window:resize', ['$event'])
  // onResize(event:any) {
  //   this.innerWidth = window.innerWidth;
  //   console.log(this.innerWidth);
    
  // }

}
