import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component'
import { routes,component  } from './auth-routing.module'
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AuthComponent,...component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
