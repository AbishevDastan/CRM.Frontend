import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private adminService: AdminService, private router: Router) { }

  get isAuthenticated() {
    return this.adminService.isAuthenticated();
  }

  logout() {
    this.adminService.logout();
    this.router.navigate(['/login']).then();
  }
}
