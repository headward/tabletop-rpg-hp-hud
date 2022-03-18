import {Component, Input, OnInit} from '@angular/core';
import {Player} from "./models/player.model";
import bdd from "../assets/bdd.json";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tabletop-rpg-hp-hud';
  @Input() player!: Player;
  players!: Player[];

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
}
