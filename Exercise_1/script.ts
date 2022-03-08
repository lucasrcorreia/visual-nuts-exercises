import { multiplesToText } from "./interfaces";
import { logAllIntsExceptMultiples } from "./services";

const defaultMTTs: multiplesToText[] = [
    {
        multiplesOf: 3,
        text: 'Visual'
    },
    {
        multiplesOf: 5,
        text: 'Nuts'
    },
];

logAllIntsExceptMultiples(1, 100, defaultMTTs);