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
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerForm.value);
    }
  }

  // register() {
  //   const time = timer(2000);
  //   this.userService.register(this.payload).subscribe((data) => {
  //     if (data["status"] === "success") {
  //       this.toastr.success(
  //         'Registration Successful',
  //         "",
  //         {
  //           timeOut: 1000,    
  //           enableHtml: true,
  //           toastClass: "alert alert-info alert-with-icon",
  //           positionClass: "toast-top-right",
  //         }
  //       );

  //       time.subscribe((i) => {
  //         this.router.navigate(["auth/"]);
  //       });
  //      }
  //   });
  // }

    ngAfterViewInit() {
      document.querySelector('body').classList.add('global-register-bg');
    }
    ngOnDestroy() {
      document.querySelector('body').classList.remove('global-register-bg');
    }
}
