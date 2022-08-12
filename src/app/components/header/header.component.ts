import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLogin = false;

  constructor(private cookieService: CookieService,
              private route: Router) { }

  ngOnInit(): void {
    this.checkCookie();

  }
  checkCookie():any {
    const cookie = this.cookieService.check("token_access");
    
    if (cookie) {
      this.isLogin = true;
      return this.isLogin;
    }
  }

  // Close session
  endSession() {
    this.cookieService.deleteAll();
    this.isLogin = false;
    this.route.navigate(['/login'])
  }

  

}
