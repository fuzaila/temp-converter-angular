import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {

  C = 0; F = 0;

  ngOnInit() {}

  convertC()  {   this.F = this.C * 9 / 5 + 32;  }

  convertF()  {   this.C = (this.F - 32) * 5 / 9;  }

}