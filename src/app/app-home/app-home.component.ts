import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  router: string;
  constructor(private _router: Router){
          this.router = _router.url;
          console.log(this.router)
    }

  ngOnInit(): void {
  }

}
