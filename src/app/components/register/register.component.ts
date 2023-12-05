import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  newEmail: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';

  error = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private adminService: AdminService, private router: Router) { }

  // ngOnInit(): void {
  //   if (this.adminService.isAuthenticated()) {
  //     this.router.navigate(['/']).then();
  //   }
  // }

  createAccount() {
    this.successMessage = '';
    this.errorMessage = '';
    this.error = '';
    
    this.adminService.register(this.newEmail, this.newPassword, this.confirmNewPassword)
        .subscribe
        ((res: any) => {
              if(res){
                this.router.navigate(['/']).then();
                this.errorMessage = '';
                this.successMessage = res.message;
              } else {
                
                this.errorMessage = res.message
              }
          },
             error => {
              console.log(error)
            }
        );    
  }

  goToLogin() {
    this.router.navigate(['/login']).then();
  }
}
