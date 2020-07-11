interface ILength {
    length: number;
}

/*function getLength(variable: any): void {
    console.log('getLength', variable.length)
}*/

/*function getLength(variable: { length: number }): void {
    console.log('getLength', variable.length)//get field
}*/
function getLength(variable: ILength): void {// param by interface
    console.log('getLength', variable.length)//get interface
}

getLength([1, 2, 3, 4, 5]);//5
const box = {
    name: 'WFM',
    // BoxLength: 20,//undefined
    length: 20
};//20
getLength(box);//20
/***********************************************/
interface IUser {
    name: string;
    age?: number;

    logInfo(info: string): void;
}

const customer: IUser = {//object by interface
    name: 'WFM',
    age: 20,
    logInfo(info: string): void {
        console.log('INFO: ', info);
    }
};
customer.logInfo('to buy');

/***********************************************/
interface IGetYear {
    getYear(): number;
}

class custom implements IUser, IGetYear {
    name: string = 'user';

    logInfo(info: string): void {
        console.log(info);
    }

    getYear(): number {
        return 2020;
    }
}