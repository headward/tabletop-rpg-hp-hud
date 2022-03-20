import {Component, Input, OnInit} from '@angular/core';
import {Player} from "./models/player.model";
import bdd from "../assets/bdd.json";
import bdd2 from "../assets/bdd2.json";
import { SlugifyPipe} from "./pipes/slugify.pipe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tabletop-rpg-hp-hud';
  @Input() player!: Player;
  players!: Player[];
  constructor(private slugifyPipe: SlugifyPipe){}
  ngOnInit(): void {
    this.players = bdd;
  }

  setHpValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  getCurrentHp(hp:string, maxHp:string): string {

    let currentHp = Number(hp)*100/Number(maxHp);

    return currentHp.toString();
  }
  slugify(input: string): string{
    return this.slugifyPipe.transform(input);
  }
  getHp(hp:string):number {
    return Number(hp);
  }
  groupAlive():boolean {
    return this.players.filter(player => this.getHp(player.hp) <= 0).length === this.players.length;
  }
}
