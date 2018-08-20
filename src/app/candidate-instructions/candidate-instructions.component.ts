import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service/app-service.service';

@Component({
  selector: 'app-candidate-instructions',
  templateUrl: './candidate-instructions.component.html',
  styleUrls: ['./candidate-instructions.component.css']
})
export class CandidateInstructionsComponent implements OnInit {

  instructions: string;
  loadingInstructions: boolean;
  errorMessage: string;
  startUrl: string;
  confirmInstructions = false;

  constructor(private appSerivce: AppServiceService) { }

  /**
   * Candidate's Start Test
   */
  startTest() {
    this.loadingInstructions = true;
    this.appSerivce.startExam()
      .subscribe((response) => {
        this.startUrl = response.url;
        window.location.href = this.startUrl;
      }, (errorResponse) => {
        this.errorMessage = 'Error On Start test' + errorResponse;
      });
  }

  ngOnInit() {
    this.loadingInstructions = true;
    this.appSerivce.getExamInstructions()
      .subscribe((response) => {
        this.loadingInstructions = false;
        this.instructions = response.instructions;
      }, (errorResponse) => {
        this.loadingInstructions = false;
        this.errorMessage = errorResponse.message;
      });
  }

}
