import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';






@Component({
  selector: 'app-root',
  templateUrl: './Main.html',
  styleUrls: ['./Main.css']
})
export class AppComponent implements OnInit{

  constructor(private router: Router) { }
  
  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    })

  }
  title = 'DreamHome';
}
