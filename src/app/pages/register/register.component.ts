import { Component } from "@angular/core";
import { UserService } from "core/http/user/user.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { timer } from "rxjs"; // Works like timeout

import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CustomvalidationService } from 'core/services/custom-validation.service'


@Component({
  templateUrl: "./register.component.html",
  selector:'app-register'
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private customValidator: CustomvalidationService
  ) {}

  ngOnInit() {
    this.intitializeForm()
  }


  intitializeForm()
  {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
        let data =  this.registerForm.value
        data.role = "admin"
        delete data.confirmPassword
        this.saveUser(data)
    }
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

  saveUser(payload:object) {
    const time = timer(4000);
    this.userService.register(payload).subscribe((data) => {
      if (data["status"] === "success") {
        this.notificationsService('Registered Successful , Redirecting to login page','success')
        time.subscribe((i) => {
          this.router.navigate(["auth/"]);
        });
       }
    },err => this.notificationsService(err,'warning'));
  }

    ngAfterViewInit() {
      document.querySelector('body').classList.add('global-register-bg');
    }
    ngOnDestroy() {
      document.querySelector('body').classList.remove('global-register-bg');
    }
}
