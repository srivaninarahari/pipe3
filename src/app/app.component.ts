import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private routes: Router){

  }
  dologin(){
this.routes.navigate(['/login']);
  }
  dologin1(){
    this.routes.navigate(['/dashboard']);
  }
}
