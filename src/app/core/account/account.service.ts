import { Injectable } from '@angular/core';
import { Router, CanActivate, NavigationStart } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AccountService implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): boolean {
        if (!this.isLoggedIn()) {
            this.router.navigate(['login']);
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
