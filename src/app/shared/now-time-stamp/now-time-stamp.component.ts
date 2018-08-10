import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-now-time-stamp',
  templateUrl: './now-time-stamp.component.html',
  styleUrls: ['./now-time-stamp.component.css']
})
export class NowTimeStampComponent implements OnInit {

  nowTime = new Date();

  constructor() { }

  updateTime() {
    setInterval(() => {
      this.nowTime = new Date();
    }, 100);
  }

  ngOnInit() {
    this.updateTime();
  }
}
