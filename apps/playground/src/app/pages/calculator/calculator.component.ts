import { Component, OnInit } from '@angular/core';
import { Liks } from 'liks';

@Component({
  selector: 'liks-playground-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  //inputText = '';
  inputText =
    'Du har rett til å være med på å bestemme på jobb. Det skal være faste møter hvor du kan si hva du mener, ha samtaler med personal eller arbeidsleder.';
  score: Liks.Score | null = null;

  constructor() {
    this.calculateLiks();
  }
  onInputTextChange() {
    console.log(this.inputText);
  }

  calculateLiks() {
    const score = Liks.score(this.inputText);
    this.score = score;
  }
}
