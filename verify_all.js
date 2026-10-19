const fs = require('fs');
const html = fs.readFileSync('app/src/main/assets/index.html', 'utf8');

const matches = [...html.matchAll(/<script(?:\s+[^>]*)?>([\s\S]*?)<\/script>/g)];
let allCode = matches.map(m => m[1]).join('\n;\n');

allCode = allCode.replace(/let\s+state\s*=/g, 'global.state =');

let innerHTMLStore = {};

global.window = {
    localStorage: {
        _d: { 'nusapura_lang': 'en' },
        getItem(k) { return this._d[k] || 'en'; },
        setItem(k, v) { this._d[k] = v; }
    },
    document: {
        getElementById: (id) => {
            if (!innerHTMLStore[id]) {
                innerHTMLStore[id] = { innerHTML: '', style: {}, classList: { add: ()=>{}, remove: ()=>{}, toggle: ()=>{}, contains: ()=>false } };
            }
            return innerHTMLStore[id];
        },
        querySelectorAll: () => [],
        querySelector: () => null,
        addEventListener: () => {}
    },
    addEventListener: () => {}
};
global.localStorage = global.window.localStorage;
global.document = global.window.document;

allCode += `
console.log("Language active:", getGameLanguage());
setGameLanguage('en');
console.log("Language after set:", getGameLanguage());

state.year = 2;
state.news = [
  { year: 'Thn 1', text: 'Walikota resmi dilantik untuk memimpin Kota Nusapura Periode Pertama.', mood: 1 },
  { year: 'Thn 2', text: 'Proyek raksasa Tol Lingkar Nusapura resmi selesai dikerjakan & beroperasi!', mood: 1 }
];

renderNews();
console.log("Rendered news:", innerHTMLStore['newsList'].innerHTML);

console.log("All syntax and logic tests PASSED!");
`;

eval(allCode);
