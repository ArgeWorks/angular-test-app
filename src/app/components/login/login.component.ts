import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
      private authService: AuthService,
      private toastr: ToastrService,
      private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.isAuth) this.router.navigate(['/']);

    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(8), Validators.required])
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.authService.login(this.loginForm.value.login, this.loginForm.value.password).subscribe((res: boolean) => {
      if (res) {
        this.toastr.success('Login was successfully', 'Message');
        this.router.navigate(['/']);
      }
    }, ({ error }) => this.toastr.error(error.error, 'Error'));
  }
}
