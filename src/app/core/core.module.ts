import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountService } from './account/account.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AccountService
  ],
  declarations: []
})
export class CoreModule { }
