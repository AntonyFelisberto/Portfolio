import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-swipper',
  standalone: true,
  imports: [],
  templateUrl: './swipper.component.html',
  styleUrls: ['./swipper.component.css']
})
export class SwipperComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

  ngOnInit() {
  }

}
