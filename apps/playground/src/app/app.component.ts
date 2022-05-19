import { Component, OnInit } from '@angular/core';
import { Liks, Word10 } from 'liks';

@Component({
  selector: 'liks-playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'playground';
  ngOnInit(): void {
    const l = Liks.score('asdf');
    // Liks
    Word10.validOrThrow();
    console.log(this.title);
  }
}
