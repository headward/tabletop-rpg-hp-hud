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

  setHpValue(event: Event): number {
    return Number((event.target as HTMLInputElement).value);
  }

  getCurrentHp(hp:number, maxHp:number): string {
    let currentHp = hp*100/maxHp;
    return currentHp.toString();
  }

  slugify(input: string): string{
    return this.slugifyPipe.transform(input);
  }

  getHp(hp:number):string {
    return String(hp);
  }

  groupAlive():boolean {
    return this.players.filter(player => player.hp <= 0).length === this.players.length;
  }

  hitPlayer(player:Player):void {
    player.hp--
  }

  healPlayer(player:Player):void {
    player.hp++
  }
}
