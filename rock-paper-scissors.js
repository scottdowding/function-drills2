function game(num) {
    const compChoice = Math.floor(Math.random() * 3) + 1;
    console.log(`Computer choice is ${compChoice}`);
    if (!(num > 0 && num < 4)) {
        throw new Error('Invalid user choice');
    }
    if (num === 1) {
        if (compChoice === 2) {
            return 'Computer wins';
        }
        if (compChoice === 3) {
            return 'User wins';
        }
    }
    if (num === 2) {
        if (compChoice === 1) {
            return 'User wins';
        }
        if (compChoice === 3) {
            return 'Computer wins';
        }
    }
    if (num === 3) {
        if (compChoice === 1) {
            return 'Computer wins';
        }
        if (compChoice === 2) {
            return 'User wins';
        }
    }
    return 'Tie game';
}

try {
    console.log(game(0));
}
catch (e) {
    console.log(e.message);
}
