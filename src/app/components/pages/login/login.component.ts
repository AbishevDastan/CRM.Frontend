import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private adminService: AdminService, private router: Router ) {}

  email: string = '';
  password: string = '';

  error = '';
  errorMessage: string = '';
  successMessage: string = '';

  ngOnInit(): void {
    if (this.adminService.isAuthenticated()) {
      this.router.navigate(['/']).then();
    }
  }

  auth() {
    this.authenticate(this.email, this.password);
  }

  authenticate(email: string, password: string) {
      this.error = '';
      this.errorMessage = '';
      this.successMessage = '';

      this.adminService
        .login(email, password)
        .subscribe
          ((res: any) => {
                if(res) {
                  this.router.navigate(['/']).then();
                } else {
                  this.errorMessage = res.message
                }
            },
              error => {
                console.log(error)
              }
          );
    }

    goToRegistration() {
      this.router.navigate(['/register']).then();
    }
}
