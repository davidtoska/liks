import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faker } from '@faker-js/faker';

interface GoldStandard {
  name: string;
  text: string;
  expected: number;
  actual: number;
}
const fakeGold = (): GoldStandard => {
  return {
    name: faker.lorem.sentence(3),
    expected: faker.datatype.number({ min: 5, max: 20 }),
    actual: faker.datatype.number({ min: 5, max: 20 }),
    text: faker.lorem.sentences(faker.datatype.number({ min: 3, max: 50 })),
  };
};
const fakeGoldList = Array.from(Array(50)).map((_) => fakeGold());
@Component({
  selector: 'liks-playground-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibraryComponent implements OnInit {
  list: GoldStandard[] = fakeGoldList;
  constructor() {
    console.log(faker.lorem.sentences(20));
  }

  ngOnInit(): void {
    console.log(fakeGoldList);
  }
}
