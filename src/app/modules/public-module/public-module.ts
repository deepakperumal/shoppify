import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component'
import { routes,component  } from './public-routing.module'
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [PublicComponent,...component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
