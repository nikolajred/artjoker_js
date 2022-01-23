const arrayString = ["СПАНИЕЛЬ", "АПЕЛЬСИН", "ПЕНСИОНЕРКА" , "ПОКРАСНЕНИЕ", "РАВНОВЕСИЕ" ,
    "СВОЕНРАВИЕ", "СОРАТНИЦА" , "СТАЦИОНАР", "ВАТЕРПОЛИСТКА" , "АВСТРАЛОПИТЕК", "СОЛЕПРОМЫШЛЕННОСТЬ" ,
    "ЛЕСОПРОМЫШЛЕННОСТЬ"];

let checkAnagrams = (word, arrayWords)  => {
let newArray = [];
for(let word of arrayWords){
    let arrayChar = Array.from(word);
    let string = arrayChar.sort().join().toLowerCase();
    newArray.push(string);
}
    let arrayCharWord = Array.from(word);
    let newWord = arrayCharWord.sort().join().toLowerCase();

let arrayAnagrams = [];
for(let i = 0; i < newArray.length; i++){
    if(newWord === newArray[i]){
        arrayAnagrams.push(arrayWords[i]);
    }
}
return arrayAnagrams;
}



console.log(checkAnagrams("СПАНИЕЛЬ", arrayString));
console.log(checkAnagrams("боБик", arrayString));