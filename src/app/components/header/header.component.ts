import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLogin = false;

  constructor(private cookieService: CookieService) { }

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

  

}
