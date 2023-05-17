
const findRepeatedWord = (array: string[]): string => {

    const firstString: string = array[0];
    let repeatedCharacters: string[] = [];
    let tempWord: string = ""

    for (let i = 0; i < firstString.length; i++) {
        const char: string = firstString[i];

        for (let j = 1; j < array.length; j++) {
            // find other array
            if (array[j].indexOf(tempWord + char) === -1) {
                // not match
                tempWord = char
                break;
            }

            if (j == array.length - 1) {
                tempWord += char
            }
        }
        repeatedCharacters.push(tempWord)

    }

    let maxLength: number = 0;
    let maxLengthValue: string = '';

    for (let i = 0; i < repeatedCharacters.length; i++) {
        if (repeatedCharacters[i].length > maxLength) {
            maxLength = repeatedCharacters[i].length;
            maxLengthValue = repeatedCharacters[i];
        }
    }

    return maxLengthValue;
}

function getQuestionPart(phrases: string[]): string[] {

    const word: string = findRepeatedWord(phrases)
    const parts: string[] = phrases.map((phrase) => (phrase.replace(word, "")))

    return parts
}

// console.log(getQuestionPart(['BEFRIEND', 'GIRLFRIEND', 'FRIENDSHIP']))
