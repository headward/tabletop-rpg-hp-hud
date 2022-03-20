export class Player {
    constructor(public name: string,
                public hp: number,
                public maxHp: number,
                public token: string) {
        this.name = name;
        this.hp = hp;
        this.maxHp = maxHp;
        this.token = token;
    }
}
