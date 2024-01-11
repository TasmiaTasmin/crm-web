import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

//const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })

//export class UserRoutingModule { }

export const UserRoutingModule: Routes = [{
  path: '',
  component: UserComponent,
}];

