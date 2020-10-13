import { Component } from "@angular/core";
import { UserService } from "core/http/user/user.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { timer } from "rxjs"; // Works like timeout


@Component({
  templateUrl: "./login.component.html",
  selector:'app-login'
})
export class LoginComponent {
  payload = {
    email: "",
    password: "",
  };


  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  login() {

    this.userService.login(this.payload).subscribe((data) => {
        console.log(data)

    });
  }

    ngAfterViewInit() {
      document.querySelector('body').classList.add('global-register-bg');
  }
    ngOnDestroy() {
      document.querySelector('body').classList.remove('global-register-bg');
  }
}
