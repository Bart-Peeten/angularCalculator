import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstValue: String;
  secondValue: String;
  result: Number;
  isClicked: Boolean = false;

  constructor() {
   }

  ngOnInit() {
  }

  add(): void {
    this.result = Number(this.firstValue) + Number(this.secondValue);
    this.isClicked = true;
    console.log(this.result);
    console.log('Er is op de kop gedrukt');
  }

}
