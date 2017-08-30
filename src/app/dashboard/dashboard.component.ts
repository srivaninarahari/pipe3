import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
  this.route.params.subscribe(params => {
    this.id = params['id']; // (+) converts string 'id' to a number
    });
    }
}
