import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutingModule)
  ],
  declarations: [
    UserComponent
  ]
})
export class UserModule { }
