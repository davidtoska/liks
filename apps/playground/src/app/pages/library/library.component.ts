import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Liks } from 'liks';

interface GoldStandard {
  name: string;
  text: string;
  // expected: number;
  // actual: number;
}

const goldList: ReadonlyArray<GoldStandard> = [
  {
    text: 'Vi vil vite hvordan du har det på jobb. Derfor ønsker vi å stille deg noen spørsmål. Er du trygg på jobb? Trives du på jobb? Får du si hva du mener når du er på jobb? Har du gode kollegaer på jobb? Dine svar kan hjelpe oss til å gjøre din arbeidsplass bedre. ',
    name: 'Intro_main',
  },
  {
    text: 'Det er viktig at du kan glede deg til å komme på jobb. Å føle at en gjør en god jobb. Det er vanlig at noe på jobben er kjekt mens andre ting kan være litt kjedelig. Det kan være lurt å ha forskjellige arbeidsoppgaver, for da blir en ikke så fort lei. Når arbeidsoppgavene er gode, trives jeg på jobb. ',
    name: 'Trivsel_main',
  },
  {
    name: 'Medvirking_main',
    text: 'Du har rett til å være med på å bestemme på jobb. Det skal være faste møter hvor du kan si hva du mener, ha samtaler med personal eller arbeidsleder.',
  },
  {
    name: 'Arbeidsmiljø_main',
    text: 'Du har rett til å være med på å bestemme på jobb. Det skal være faste møter hvor du kan si hva du mener, ha samtaler med personal eller arbeidsleder.',
  },
];

type GoldAndScore = GoldStandard & Liks.Score;

const goldAndScoreList: ReadonlyArray<GoldAndScore> = goldList.map((item) => {
  const score = Liks.score(item.text);
  const goldAndScore: GoldAndScore = { ...score, name: item.name };
  return goldAndScore;
});

@Component({
  selector: 'liks-playground-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibraryComponent implements OnInit {
  list = goldAndScoreList;

  ngOnInit(): void {
    console.log('GoldList.length: ' + goldList);
  }
}
