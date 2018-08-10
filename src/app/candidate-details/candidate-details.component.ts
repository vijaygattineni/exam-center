import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service/app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {

  userDetails: any;
  loadingCandidateDetails: boolean;
  errorMessage: string;

  constructor(private appSerivce: AppServiceService, private router: Router) { }

  /**
   * Candidate details cancel
   */
  cancelConfirmation() {
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  ngOnInit() {
    this.loadingCandidateDetails = true;
    this.appSerivce.getCandidateDetails()
      .subscribe((details) => {
        this.userDetails = details;
        if (this.userDetails.CandidateInfo.photo) {
          this.userDetails.CandidateInfo.photo.replace(/\\n/g, '');
        }
        this.loadingCandidateDetails = false;
      }, (errorResponse) => {
        this.loadingCandidateDetails = false;
        this.errorMessage = errorResponse.message;
      });
  }

}
