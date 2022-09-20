import { Component } from '@angular/core';

@Component({
  selector: 'app-infotab',
  templateUrl: './infotab.html',
  styleUrls: ['./infotab.css']
})
export class InfotabComponent {

  CountUp1: number = 0;
  CountUpStop1: any = setInterval(() => {
    this.CountUp1++;

    if (this.CountUp1 == 964) {
      clearInterval(this.CountUpStop1);
    }
  })

  CountUp2: number = 0;
  CountUpStop2: any = setInterval(() => {
    this.CountUp2++;

    if (this.CountUp2 == 1514) {
      clearInterval(this.CountUpStop2);
    }
  })

  CountUp3: number = 0;
  CountUpStop3: any = setInterval(() => {
    this.CountUp3++;

    if (this.CountUp3 == 458) {
      clearInterval(this.CountUpStop3);
    }
  })

  CountUp4: number = 0;
  CountUpStop4: any = setInterval(() => {
    this.CountUp4++;

    if (this.CountUp4 == 159) {
      clearInterval(this.CountUpStop4);
    }
  })

}
