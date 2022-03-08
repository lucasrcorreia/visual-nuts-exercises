import { countLangInCountries, countriesWithHighestNumOfLangsAndLang, mostCommonLangsInCountries, numberOfCountries } from "./services";
import { country } from "./interfaces";

const defaultCountries: country[] = [
    {
        country:"US",
        languages: ["en"]
    },
    {
        country:"BE",
        languages: ["nl","fr","de"]
    },
    {
        country:"NL",
        languages: ["nl","fy"]
    },
    {
        country:"DE",
        languages: ["de"]
    },
    {
        country:"ES",
        languages: ["es"]
    }
];

console.log('--Number of countries:')
numberOfCountries(defaultCountries);
console.log("--Countries that speaks 'de' and has the highest number of official languages:")
countriesWithHighestNumOfLangsAndLang(defaultCountries, 'de');
console.log("--Number of all official languages in the listed countries:")
countLangInCountries(defaultCountries);
console.log("--Countries that has the highest number of official languages:")
countriesWithHighestNumOfLangsAndLang(defaultCountries);
console.log("--Most common languages in the listed countries:")
mostCommonLangsInCountries(defaultCountries);