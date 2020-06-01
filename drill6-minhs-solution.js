let cipher = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4
};

function decode(word){
    let decodedChar = '';

    switch(word[0]){
        case 'a': decodedChar = word[cipher['a']]; break;
        case 'b': decodedChar = word[cipher['b']]; break;
        case 'c': decodedChar = word[cipher['c']]; break;
        case 'd': decodedChar = word[cipher['d']]; break;
        default: decodedChar = ' ';
    }

    return decodedChar;
}

let message = 'craft block argon meter bells brown croon droop';
let decodedMessage = '';

const words = message.split(' ');

for(let i=0; i<words.length; i++){
    decodedMessage += decode(words[i]);
}

// console.log(decodedMessage);

function decodeWords(message){
    let decodedMessage = '';
    const words = message.split(' ');
        
    for(let i=0; i<words.length; i++){
        decodedMessage += decode(words[i]);
    }
    return decodedMessage;
}

console.log(decodeWords(message));