import { Observable, of, throwError as observableThrowError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { AccountService } from '../core/account/account.service';
import { environment } from '../../environments/environment';
import { Login } from '../login/login.model';



@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  restGateway = environment.restApiUrl;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  setHeader() {
    this.httpOptions.headers = new HttpHeaders().set('auth_token', sessionStorage.getItem('token'));
  }

  constructor(private http: HttpClient, private account: AccountService) { }

  MTRMLogin(login: Login): Observable<Login> {
    const url = this.restGateway + '/candidate/login';
    return this.http.post<Login>(url, JSON.stringify({
      login: login.userid,
      password: login.password,
      confirm_attendance: login.confirm_attendance
    }));
  }

  getCandidateDetails(): Observable<any> {
    this.setHeader();
    const url = this.restGateway + '/candidate';
    // const url = '../../assets/fixture/candidate-details.json';
    return this.http.get<any>(url, this.httpOptions);
  }

  getExamInstructions(): Observable<any> {
    this.setHeader();
    const url = this.restGateway + '/instructions';
    // const url = '../../assets/fixture/instructions.json';
    return this.http.get<any>(url, this.httpOptions);
  }

  startExam(): Observable<any> {
    const url = this.restGateway + '/candidate/startTest';
    return this.http.get<any>(url, this.httpOptions);
  }
}
