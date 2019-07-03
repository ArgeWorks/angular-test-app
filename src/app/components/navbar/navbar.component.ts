import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
   brand: string = 'Todo\'sApp';

  constructor(
      public authService: AuthService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  onLogout(e) {
    e.preventDefault();
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
