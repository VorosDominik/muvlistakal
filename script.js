import { SZAMLIST , szoveglista } from "./adat.js";

$(function (){

/*    keveres1(SZAMLIST);
for (let index = 0; index < SZAMLIST.length; index++) {
    console.log(SZAMLIST[index],MegKevertIndexek[index],SZAMLIST[MegKevertIndexek[index]])
} */
console.log(szoveglista)
keveres2(szoveglista)
console.log(szoveglista)
console.log(SZAMLIST)
keveres2(SZAMLIST)
console.log(SZAMLIST)
rendezes1(SZAMLIST)
});
function keveres1(list) {
    for (let i = 0; i < LIST.length; i++) {
        const r = Math.floor(Math.random() * LIST.length);
        const h = LIST[i];
        LIST[i] = LIST[r];
        LIST[r] = h;
        }
        
        function shuffel() {
        let van
        let MegKevertIndexek=[]
        let szamok
        while (MegKevertIndexek.length<length.list) {
        szamok=Math.floor(Math.random()*length.list)
        van=false
        let index = 0;
        while ( index < MegKevertIndexek.length && !(szamok==MegKevertIndexek[index])) {
        index++
        }
        if (index >= MegKevertIndexek.length)
        {
        MegKevertIndexek.push(szamok)
        }
        
        }
        console.log(MegKevertIndexek)
        return MegKevertIndexek
    }
}
function keveres2(list){
    list.sort();

}
rendezes1(list){
    points.sort(function(a, b){return a - b});
}