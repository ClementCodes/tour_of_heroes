import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  //ici npoiur recuperer les donnees dans le ngfor ==
  heroes = HEROES;

  // ==============================================

  constructor() { }

  ngOnInit(): void {


  }

  ///  (alias) interface Hero====
  ///import Hero
  selectedHero?: Hero;
  //==============================

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
