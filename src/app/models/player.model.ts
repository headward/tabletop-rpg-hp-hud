export class Player {
    constructor(public name: string,
                public hp: string,
                public maxHp: string,
                public token: string) {
        this.name = name;
        this.hp = hp;
        this.maxHp = maxHp;
        this.token = token;
    }
}
