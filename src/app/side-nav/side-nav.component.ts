import { Component, OnInit } from '@angular/core';
import { SideNavItem } from './side-nav-item';
import { Icon } from './icon';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
    
  public navItems: SideNavItem[];

  constructor() { 
      this.navItems = [
        new SideNavItem("Account", "#", "Account", new Icon("pficon", "user"), "active"),
        new SideNavItem("Password", "#", "Password", new Icon("pficon", "key")),
        new SideNavItem("Authenticator", "#", "Authenticator", new Icon("pficon", "cloud-security")),
        new SideNavItem("Sessions", "#", "Sessions", new Icon("fa", "clock-o")),
        new SideNavItem("Applications", "#", "Password", new Icon("fa", "th")),
      ];
      
  }
  
  setActive(item: SideNavItem) {
      for (let navItem of this.navItems) {
          if (navItem === item) {
              navItem.setActive("active");
          } else {
              navItem.setActive("");
          }
      }
  }

  ngOnInit() {
  }

}
