import { Component, OnInit } from '@angular/core';
import { Liks } from 'liks';

@Component({
  selector: 'liks-playground-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  inputText = '';
  score: Liks.Score['liks'] | null = null;

  ngOnInit(): void {
    console.log(this.inputText);
  }

  onInputTextChange() {
    console.log(this.inputText);
  }

  calculateLiks() {
    const eva = Liks.score(this.inputText);
    this.score = eva.liks;
    console.log(this.score);
  }
}
