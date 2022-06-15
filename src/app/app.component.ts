import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'kmrl';
  constructor(private route:ActivatedRoute) {
    console.log(route.snapshot);
  }
}
