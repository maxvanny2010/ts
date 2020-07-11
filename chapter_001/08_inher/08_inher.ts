class Magazine {
    // public name: string;
    protected isNew: boolean;
    protected code: number;

    constructor(public name: string, public boss: string) {
        this.isNew = false;
        this.code = 5;
    }

    getCode(): string {
        return this.code + '';
    }
}

class Ads extends Magazine {
    private price: number;
    private rows: number;
    private text: string;

    constructor(public name: string, public boss: string, price: number, rows: number, text: string) {
        super(name, boss);
        this.price = price;
        this.rows = rows;
        this.text = text;
        this.isNew = true;
        this.code = 10;
    }

    getCode(): string {
        return 'GET CODE: ' + this.code;
    }
}

const ads = new Ads('Magazine July', 'user', 100, 10, 'buy A and B');
console.log('GET ADS: ');
console.log(ads);
console.log(ads.getCode());

