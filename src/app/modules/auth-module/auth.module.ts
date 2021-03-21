/* Modules */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component'
import { routes,component  } from './auth-routing.module'
import { RouterModule } from "@angular/router";
import { FormsModule , ReactiveFormsModule} from "@angular/forms";


/* Services */

import { UserService } from 'core/http/user/user.service'


@NgModule({
  declarations: [AuthComponent,...component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  
  ],  
  providers:[  
    UserService
  ]
})
export class AuthModule { }
