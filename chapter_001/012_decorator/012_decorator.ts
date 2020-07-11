function logger(constrFunc: Function) {
    console.log(constrFunc);
}

function shouldLog(flag: boolean): any {
    return flag ? logger : null;
}

@shouldLog(true)
class Tmp {
    constructor(public name: string, public age: number) {
        console.log('I tmp');
    }
}

/***********************************************************/
function addCustomTag(constrFn: Function) {
    constrFn.prototype.showHtml = function () {
        const pre = document.createElement('pre');
        pre.innerHTML = JSON.stringify(this);
        document.body.appendChild(pre);
    }
}

@addCustomTag
class Tmp1 {
    constructor(public name: string, public age: number, public job: string) {
    }
}

const tmp1 = new Tmp1('TMP1', 20, 'Frontend');
console.log(tmp1);
(<any>tmp1).showHtml();