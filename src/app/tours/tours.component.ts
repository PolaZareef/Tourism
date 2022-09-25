import { Component, OnInit ,Input} from '@angular/core';
import {TourData} from './tours.interface';
@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {
  @Input()
  tourData:TourData[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
