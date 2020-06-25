import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  isAuth(): boolean {
    return this.auth.isAuth();
  }

  isHost(): boolean {
    return this.auth.isHost();
  }

  isCustomer(): boolean {
    return this.auth.isCustomer();
  }
  
  signOut() {
    this.auth.signOut();
    this.router.navigate(['']);
  }

}
