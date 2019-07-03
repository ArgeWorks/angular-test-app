import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
      private authService: AuthService,
      private toastr: ToastrService,
      private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.isAuth) this.router.navigate(['/']);

    this.registerForm = new FormGroup({
      login: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(8), Validators.required])
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) return;

    this.authService.register(this.registerForm.value.login, this.registerForm.value.password).subscribe((res: boolean) =>  {
      if (res) {
        this.toastr.success('Register was successfully', 'Message');
        this.router.navigate(['/']);
      }
    }, ({ error }) => this.toastr.error(error.error, 'Error'));
  }

}
