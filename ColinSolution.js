// Function for challenge banner
function challengeBanner(num) {
    console.log(`=========== Challenge ${num} ===========`)
}

// Challenge 1

function vowelsOnly(str) {

    let i = 0
    let vowels = 'aeiou'

    while (i < str.length) {
        if  (vowels.includes(str[i])) {
            console.log(str[i])
            i = i + 1
        }
        i = i + 1
    }   
    
}

challengeBanner('vowelsOnly')
vowelsOnly('ohey'); 


// Challenge 2

function firstFiveVowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    let i = 0
    
    while (i < str.length) {
        if (vowels.includes(str[i]) && count < 5) {
            console.log(str[i])
            count = count + 1
        }
        i = i + 1
    }
}


challengeBanner('firstFiveVowels');
firstFiveVowels('Regular expressions are for term 2');

// Challenge 3
function printEveryThirdCharacter(str){
    let i = 2;
    while (i < str.length){
        console.log(str[i])
        i = i + 3;
    }

}

challengeBanner('printEveryThirdCharacter')
printEveryThirdCharacter('I am the alfalfa and the omelette.')

// Challenge 4
function firstFourCharAfter(str, start) {
    // // Way 1
    // let count =  0
    // let i = start
    // while (i < str.length && i < start + 4) {
    //     if (count < 4) {
    //         console.log(str[i])
    //         count = count + 1
    //     }
    //     i = i + 1
    // }

    // Way 2
    let i = start
    const end = start + 4
    while (i < str.length && i < end) {
        console.log(str[i])
        i = i + 1
    }
}
challengeBanner('firstFourCharAfter')
firstFourCharAfter("Oh hi, I didn't see you there. Welcome.", 4)
firstFourCharAfter("Oh hi, I didn't see you there. Welcome.", 36)



// challenge 5

function indexOfU(str){
    let i = 0
    while (i < str.length) {
        if (str[i] === 'u') {
            console.log(i)
        }
        i ++
    }
    
}

challengeBanner('indexOfU')
indexOfU('you pick the wrong house, bub.')


// Challenge 6

// function firstIndexOfU(str){
//     let i = 0
//     let found = false
//     while (i < str.length) {
//         if (str[i] === 'u' && found === false) {
//             console.log(i)
//             found = true; 
//         }
//         i ++
//     }
// }
function firstIndexOfU(str){
// // Way 1 =============
//     let i = 0
//     while (i < str.length) {
//         if (str[i] === 'u') {
//             console.log(i)
//             return 
//         }
//         i ++
//     }

// Way 2 =============
    // let i = 0
    //     let found = false
    //     while (i < str.length) {
    //         if (str[i] === 'u' && found === false) {
    //             console.log(i)
    //             found = true; 
    //         }
    //         i ++
    //     }

    // Way 3 =============
    let i = 0
    let count = 0
    while (i < str.length) {
        if (str[i] === 'u' && count === 0) {
            console.log(i)
            count = 1; 
        }
        i ++
    }

}

challengeBanner('firstIndexOfU')
firstIndexOfU('you pick the wrong house, bub.')


// Challenge 7

function firstIndexOfU2(str){
    let i = 0
    let found = false
    while (i < str.length) {
        if (str[i] === 'u' && found === false) {
            console.log(i)
            found = true; 
        }
        i ++
    }

    if (found === false){
        console.log(-1)
    }
    }

challengeBanner('firstIndexOfU2')
firstIndexOfU2("I'm Canadian")