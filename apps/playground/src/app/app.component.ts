import { Component, OnInit } from '@angular/core';
import { data } from '../data';

@Component({
  selector: 'liks-playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'playground';

  ngOnInit(): void {
    console.log(data);
  }
}
