import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidateInstructionsComponent } from './candidate-instructions/candidate-instructions.component';
import { LoginComponent } from './login/login.component';
import { EndTestComponent } from './end-test/end-test.component';

import { AccountService } from './core/account/account.service';
import { LoginAccountService } from './core/login-account/login-account.service';

const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent, canActivate: [LoginAccountService] },
    { path: 'details', component: CandidateDetailsComponent , canActivate: [AccountService] },
    { path: 'instructions', component: CandidateInstructionsComponent , canActivate: [AccountService] },
    { path: 'endtest', component: EndTestComponent , canActivate: [AccountService] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

export class RoutingModule { }
