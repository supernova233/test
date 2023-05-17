//  ES2017 + //

//  Regular = 2 to 10
//  J Q K   = 10
//  A       = 11

// JJJ = 32.5  , AAA = 35

interface countType {
    [key: string]: number
}

const isToK = (cards: string[]): boolean => {
    // Check if Three of kind
    let count: countType = {}
    cards.forEach(cv => {
        count[cv] = (count[cv] || 0) + 1;
    })
    const arr = Object.values(count)
    const highestVal = Math.max(...arr)

    return (highestVal >= 3 ? true : false)
}

const isACE = (cards: string[]): boolean => {
    let count: countType = {}
    cards.forEach(cv => {
        count[cv] = (count[cv] || 0) + 1;
    })
    const maxVal = Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
    return maxVal === "A" ? true : false;
}


function getHandScore(input: string): number {

    let score: number = 0;
    const cards: string[] = input.split(" ")
    let count: countType = {}
    const symbols: string[] = cards.map((c) => (c[0]))
    const cardValue: string[] = cards.map((c) => (c[1]))

    if (isToK(cardValue)) {
        // Three of Kind
        if (isACE(cardValue)) {
            score = 35;
        } else {
            score = 32.5;
        }
    } else {

        symbols.forEach(s => {
            count[s] = (count[s] || 0) + 1;
        });
        const highest:string = Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
        const cardNumber:number[] = cards.filter(C => (C[0] === highest)).map(C => {
            return C.replace(highest, '')
        }).map(v => {
            if (v === 'A') {
                return 11
            } else if (v === 'J' || v === 'Q' || v === 'K') {
                return 10
            } else { return Number(v) }
        });

        score = cardNumber.reduce((a, b) => a + b, 0);
    }

    return score
}

console.log(getHandScore('C9 H9 S9'))