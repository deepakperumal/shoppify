import { Routes } from '@angular/router'
import { PublicComponent } from './public.component'

import {  HomeComponent  } from '../../pages/public/home/home.component'


export const routes:Routes = [

        {

            path:'' , component:PublicComponent , children:[

                    { path:'',component:HomeComponent }



            ]

        }


]

export const component = [HomeComponent]