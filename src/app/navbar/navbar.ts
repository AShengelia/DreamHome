import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit {
  classOnScroll = "notScrolled"
  scrolled: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", []) onWindowScroll() {

    if (document.documentElement.scrollTop > 100) {
      this.scrolled = true;
      this.classOnScroll = "scrolled"
    }
    else {
      this.classOnScroll = "notScrolled"
      this.scrolled = false;
    }
  }

}
