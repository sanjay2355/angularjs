import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-type-business',
  templateUrl: './app-type-business.component.html',
  styleUrls: ['./app-type-business.component.css']
})
export class AppTypeBusinessComponent implements OnInit {
  
  router: String;
  constructor(private _router: Router) {
    this.router = _router.url;
    console.log(this.router)
  }
  // constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
   // console.log(this.activatedRoute.pathFromRoot[0].snapshot)
  }

}
