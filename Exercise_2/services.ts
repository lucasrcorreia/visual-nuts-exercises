import { country, languageAppearences } from './interfaces';

export function numberOfCountries(countries: country[] = []): number {
    console.log(countries.length);
    return countries.length;
}

export function countriesWithHighestNumOfLangsAndLang(countries: country[] = [], language: string | undefined = undefined): string[] {
    if(language) countries = countries.filter(ct => ct.languages.includes(language));
    countries.sort((a, b) => {
        if(a.languages.length > b.languages.length) return -1;
        if(a.languages.length < b.languages.length) return 1;
        return 0
    });
    if(countries.length === 0) return [];
    countries = countries.filter(ct => ct.languages.length === countries[0].languages.length);
    let result: string[] = [];
    for(let i = 0; i < countries.length; i++) {
        result.push(countries[i].country);
    }
    console.log(result);
    return result;
}

export function countLangInCountries(countries: country[] = []): number {
    const langs = uniqueLanguages(countries);
    console.log(langs.size);
    return langs.size;
}

export function mostCommonLangsInCountries(countries: country[] = []): string[] {
    const langs = uniqueLanguages(countries);
    let langsAppearences: languageAppearences[] = [];
    langs.forEach(lang => langsAppearences.push({ 
        language: lang, 
        appearences: countries.filter(ct => ct.languages.includes(lang)).length
    }));
    if(langsAppearences.length === 0) return [];
    langsAppearences.sort((a, b) => {
        if(a.appearences > b.appearences) return -1;
        if(a.appearences < b.appearences) return 1;
        return 0
    });
    langsAppearences = langsAppearences.filter(lang => lang.appearences === langsAppearences[0].appearences);
    let result: string[] = [];
    for(let i = 0; i < langsAppearences.length; i++) {
        result.push(langsAppearences[i].language);
    }
    console.log(result);
    return result;
}

function uniqueLanguages(countries: country[] = []): Set<string> {
    const langs = new Set<string>();
    countries.forEach(ct => ct.languages.forEach(lang => langs.add(lang)));
    return langs;
}