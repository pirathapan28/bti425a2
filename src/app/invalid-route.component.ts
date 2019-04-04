import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invalid-route',
  templateUrl: './invalid-route.component.html',
  styleUrls: ['./invalid-route.component.css']
})
export class InvalidRouteComponent implements OnInit {

  path: string;
  
  constructor(private m: ActivatedRoute) { 

    this.m.url.subscribe(u => this.path = u.join('/'));
  }

  ngOnInit() {
  }

}
