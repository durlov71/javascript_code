// vowel
let vowel = "F";
let lower_Case = (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u');
let upper_Case = (vowel === 'A' || vowel === 'E' || vowel === 'I' || vowel === 'O' || vowel === 'U');

if (lower_Case || upper_Case) {
    console.log("its a vowel")
} else {
    console.log("Consonant")
}

//ternary

console.log((lower_Case || upper_Case) ? "Its a vowel" : "its a Consonant")