import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule} from "@angular/router";
import { AuthGuard } from './core/guards/auth-guard'




const routes: Routes = [

      {
        path: "admin",
        loadChildren:
          "./modules/admin-module/admin-layout.module#AdminLayoutModule",
          canActivate:[AuthGuard]
      },
      {
        path: "",
        loadChildren:
          "./modules/public-module/public-module#PublicModule"
      },
      {
        path: "auth",
        loadChildren:
          "./modules/auth-module/auth.module#AuthModule"
      }  

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
