import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end-test',
  templateUrl: './end-test.component.html',
  styleUrls: ['./end-test.component.css']
})
export class EndTestComponent implements OnInit {

  constructor(private router: Router) { }

  /**
   * Candidate's End Test
   */
  endTest() {
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
