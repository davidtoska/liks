import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { Word10 } from 'liks';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'liks-playground-word10',
  templateUrl: './word10.component.html',
  styleUrls: ['./word10.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Word10Component implements OnInit {
  data = new MatTableDataSource<Word10.WordStats>([]);

  showColumns: Array<keyof Word10.WordStats> = [
    'rang',
    'word',
    'abs',
    'rel',
    'cum',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.data.paginator = this.paginator;
    this.data.data = [...Word10.WORD_STATS];
    console.log(this.paginator.length);
  }

  ngOnInit(): void {}

  applyFilter(event: KeyboardEvent) {
    console.log(event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }
}
