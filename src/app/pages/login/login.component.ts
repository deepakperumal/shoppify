import { Component } from "@angular/core";
import { UserService } from "core/http/user/user.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { timer } from "rxjs"; // Works like timeout
import { StorageService } from 'core/services/storage.service'


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
    private router: Router,
    private storageService:StorageService
  ) {}

  login() {

    if(!this.payload.email || !this.payload.password){
      this.notificationsService('Fields cannot be empty','warning');
      return ;
    }

    const time = timer(4000);
    this.userService.login(this.payload).subscribe((data) => {
      if (data["status"] === "success") {
        this.storageService.setItem('token',data['token']);
        this.storageService.setItem('userId',data['data']._id);
        this.notificationsService('Login Successful , Redirecting to dashboard','success')
        time.subscribe((i) => {
          this.router.navigate(["admin/"]);
        });
       }
    },err => this.notificationsService(err,'warning'));
  }


  notificationsService(msg:string,status:string)
  {
    this.toastr.success(
      msg,
      "",
      {
        timeOut: 3000,    
        enableHtml: true,
        toastClass: `alert alert-${status} alert-with-icon`,
        positionClass: "toast-top-right",
      }
    );
  }

    ngAfterViewInit() {
      document.querySelector('body').classList.add('global-register-bg');
  }
    ngOnDestroy() {
      document.querySelector('body').classList.remove('global-register-bg');
  }
}
