import { multiplesToText } from "./interfaces";



export function logAllIntsExceptMultiples(start: number, finish: number, allMTT: multiplesToText[] = []): void {
    if(finish <= start) {
        console.log('Invalid Parameters');
        return;
    }
    let numToLog = start;
    while(numToLog <= finish) {
        const mTTs = allMTT.filter(mTT => numToLog % mTT.multiplesOf === 0);
        if(mTTs.length > 0) {
            let textToLog = '';
            for(let i = 0; i < mTTs.length; i++) {
                textToLog += i === 0 ? mTTs[i].text : ' ' + mTTs[i].text;
            }
            console.log(textToLog);
        } else {
            console.log(numToLog);
        }
        numToLog++;
    }
}

