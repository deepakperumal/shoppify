import { Routes } from '@angular/router'
import { AuthComponent } from './auth.component'

import {  LoginComponent  } from '../../pages/login/login.component'
import {  RegisterComponent  } from '../../pages/register/register.component'


export const routes:Routes = [

        {

            path:'' , component:AuthComponent , children:[

                    { path:'',component:LoginComponent },
                    { path:'register',component:RegisterComponent }

            ]

        }


]

export const component = [LoginComponent,RegisterComponent] 