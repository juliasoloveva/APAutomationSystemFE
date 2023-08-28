import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  isLoggedIn: boolean = false;
  userRoles: string[] = [];
  username: string = "";

  @Input('sidenav') sidenav: any;
  
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
      this.username = this.authService.getUsername();
    });

    this.authService.userRoles$.subscribe((roles) => {
      this.userRoles = roles;
    });
  }

  logout() {
    this.authService.logout()
  }
}
