class Message {
    // public name: string;
    protected isNew: boolean;
    private rows: number = 0;

    constructor(public name: string, public author: string) {
        this.isNew = true;
    }

    private getIsNew(): boolean {
        return this.isNew;
    }

    public isNews(): boolean {
        return this.getIsNew()
    }

    public setRows(rows: number) {
        this.rows = rows;
    }

    getRows(): number {
        return this.rows;
    }
}

const msg = new Message('WFM', "Boss");
console.log(msg);
console.log('ROWS: ' + msg.getRows());
msg.setRows(200);
console.log('NEW ROWS: ' + msg.getRows());
console.log('GET PRIVATE FUNCTION: ' + msg.isNews());
