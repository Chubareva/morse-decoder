const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
     
  let words = [];
  let res = [];

  for (let i = 0; i < expr.length-1; i+=10) {
    words.push(expr.slice(i, i + 10));
  }

  let str = words.map((word) => word
                                  .replace(/\*{10}/g, ' ')
                                  .replace(/11/g, '-')
                                  .replace(/10/g, '.')
                                  .replace(/00/g, ''));

  str.forEach((word) => res.push(MORSE_TABLE[word] || ' '));

  return res.join('');
}


module.exports = {
    decode
}
