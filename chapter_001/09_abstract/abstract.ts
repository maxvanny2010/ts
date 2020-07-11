abstract class Car {
    model: string = '';
    year: number = 0;

    abstract logInfo(info: string): void;

    getYear(): number {
        return this.year;
    }
}

class BMW extends Car {
    constructor(public model: string, public year: number) {
        super();
    }

    logInfo(info: string): void {
        console.log('INFO: ' + info + 'MODEL: ' + this.model + ' ' + 'YEAR: ' + this.year);
    }
}

let bmw = new BMW('5', 2020);
bmw.logInfo('NEW ADS => ');
console.log(bmw.getYear())
console.log(bmw);