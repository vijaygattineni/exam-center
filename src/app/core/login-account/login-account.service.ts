import { Injectable } from '@angular/core';
import { Router, CanActivate, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAccountService {

    constructor(private router: Router) { }

    canActivate(): boolean {
        if (this.isLoggedIn()) {
            this.router.navigate(['details']);
            return false;
        } else {
            return true;
        }
    }

    isLoggedIn() {
        if (sessionStorage.getItem('token')) {
            return true;
        } else {
            return false;
        }
    }
}
