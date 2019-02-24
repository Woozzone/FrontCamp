import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthService } from './auth.service';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    AuthService
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class AuthModule { }
