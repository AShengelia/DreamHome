import { Component, OnInit, } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-uparrow',
  templateUrl: './uparrow.html',
  styleUrls: ['./uparrow.css']
})

export class UparrowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  };

  ScrollTo(): void {
    window.scrollTo(0, 0)
  }

  classOnScroll = "DisplayOff"
  DisplayOn: boolean = false;

  @HostListener("window:scroll", []) onWindowScroll() {
    if (document.documentElement.scrollTop > 400) {
      this.DisplayOn = true;
      this.classOnScroll = "DisplayOn"
    }
    else {
      this.classOnScroll = "DisplayOff"
      this.DisplayOn = false;
    }
  }
}
