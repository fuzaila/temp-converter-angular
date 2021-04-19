import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {

  C = 0;
  F = 0;

  ngOnInit() {

    // this.C = this.F − 32;
    // this.C = this.C  × 5 / 9;
    // this.F = this.C*9/5 + 32;

      // this.C = parseInt(this.C);

      this.C = this.F * 5 / 9 + 32;
      this.F = this.C * 9 / 5 + 32;


  }

}