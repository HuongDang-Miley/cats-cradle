// Function for challenge banner
function challengeBanner(num) {
    console.log(`=========== Challenge ${num} ===========`)
}

// Challenge 1

function returnVowels(str) {
    let k = 0
    let currentChar = str[k]

    while (k < str.length) {
        let a = currentChar === 'a'
        let e = currentChar === 'e'
        let i = currentChar === 'i'
        let o = currentChar === 'o'
        let u = currentChar === 'u'
        
        if (a || e || i || o || u ){
            console.log(currentChar)
            k ++
            currentChar = str[k]
        } else { 
            k ++
            currentChar = str[k]
        }
    }   
}

challengeBanner('returnVowels');
returnVowels('Regular expressions are for term 2');


//challenge 2

function returnFirst5Vowels(str) {
    let k = 0
    let currentChar = str[k]
    let sumChar = 0
    
    while (k < str.length && sumChar < 5) {
        let a = currentChar === 'a'
        let e = currentChar === 'e'
        let i = currentChar === 'i'
        let o = currentChar === 'o'
        let u = currentChar === 'u'
        
        if (a || e || i || o || u ){
            console.log(currentChar)
            sumChar ++
            k ++
            currentChar = str[k]
            
        } else { 
            k ++
            currentChar = str[k]
        }
    }   
}

challengeBanner('returnFirst5Vowels');
returnFirst5Vowels('Regular expressions are for term 2');


// Challenge 3
function returnEveryThirdChar(str){
    let i = 2
    let currentChar = str[i]
    while (i < str.length) {
        if (currentChar === ' '){
            i ++
            currentChar = str[i]
        } else {
            console.log(currentChar)
            i += 2
            currentChar = str[i]
        }
    }
}

challengeBanner('returnEveryThirdChar');
returnEveryThirdChar('I am the alfalfa and the omelette')


// Challenge 4

function print4CharAfterGivenIndex(str, num){
    let i = num
    let currentChar = str[i]
    let next4index = i + 4
    let length = str.length
    length;
    next4index;

    if (str.length < next4index) {
        while (i < str.length) {
            console.log(currentChar)
            i++
            currentChar = str[i]
        }
    }

    if (str.length >= next4index) {
        while (i < next4index) {
            console.log(currentChar)
            i++
            currentChar = str[i]
        }
    }
}  

challengeBanner('print4CharAfterGivenIndex')
print4CharAfterGivenIndex("Oh hi, I didn't see you there. Welcome.", 36);


// Challenge 5
function printIndexOfAllU(str) {
    let i = 0
    let currentChar = str[i]
    let getIndexOfU = 0
    
    while (i <= str.length) {
        if (currentChar === 'u') {
            getIndexOfU = i
            console.log(getIndexOfU)
            i ++
            currentChar = str[i]
        } else {
            i ++
            currentChar = str[i]
        }
    }
}

challengeBanner('printIndexOfAllU')
printIndexOfAllU('You picked the wrong house, bub.');


// Challenge 6

function printIndexOfFirstU(str){
    let i = 0
    let currentChar = str[i]

    while (i < str.length) {
        if (currentChar === 'u') {
            console.log(i)
            i = str.length
        } else {
            i ++
            currentChar = str[i]
        }
    }
}

challengeBanner('printIndexOfFirstU')
printIndexOfFirstU('You picked the wrong house, bub.');


// Challenge 7

function getIndexOfFirstU(str) {
    let i = 0
    let currentChar = str[i]

    while (i < str.length) {
        if (currentChar === 'u') {
            console.log(i)
            i = str.length
        } else {
            i ++
            currentChar = str[i]
        }
    }
    console.log('-1')
}

challengeBanner('getIndexOfFirstU');
getIndexOfFirstU("I'm Canadian.");
