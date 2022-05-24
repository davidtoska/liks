import { Component, OnInit } from '@angular/core';
import { Liks } from 'liks';

@Component({
  selector: 'liks-playground-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  inputText =
    'Du har rett til å være med på å bestemme på jobb. Det skal være faste møter hvor du kan si hva du mener, ha samtaler med personal eller arbeidsleder.';
  score: Liks.Score | null = null;

  ngOnInit(): void {
    console.log(this.inputText);
    this.calculateLiks();
  }

  onInputTextChange() {
    console.log(this.inputText);
  }

  calculateLiks() {
    const score = Liks.score(this.inputText);
    this.score = score;
    console.log(this.score);
  }
}
