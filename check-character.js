let str = "ádasdjahdkjashdnalkdj";

function checkCharacter(letter) {

    let count = 0;
    if (!str.includes(letter)) {
        return -1
    } else {
        let re = new RegExp(letter, 'g');
        let result = str.match(re);
        count = result.length;
    }


    // count = str.match(re).length;

    return count;
}

console.log(checkCharacter("a"));