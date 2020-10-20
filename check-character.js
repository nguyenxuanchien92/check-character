let str = "ádasdjahdkjashdnalkdj";

function checkCharacter(letter) {
    let count = 0;
    // creating regex
    let re = new RegExp(letter, 'g');

    // matching the pattern
    count = str.match(re).length;

    return count;
}

console.log(checkCharacter("a"));