import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidateInstructionsComponent } from './candidate-instructions/candidate-instructions.component';
import { EndTestComponent } from './end-test/end-test.component';
import { LoginComponent } from './login/login.component';
import { NowTimeStampComponent } from './shared/now-time-stamp/now-time-stamp.component';

// Modules
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Pipes
import { SafePipe } from './shared/pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CandidateDetailsComponent,
    CandidateInstructionsComponent,
    EndTestComponent,
    LoginComponent,
    NowTimeStampComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
