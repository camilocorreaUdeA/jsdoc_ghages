/**
 * @function
 * @param {String} friend - your friend's name
 * @description This function just greets and nothing else
 */
const greetFriend = friend => {
    console.log('Hello' + friend)
}

/**
 * @function
 * @param {String} data - String to search in 
 * @param {String} word - String to be found
 * @returns {Boolean}
 * @description This function looks for a word in data string
 */
const findTextInString = (data, word) => {
    return data.includes(word)
}

/**
 * @function
 * @param {number} a - number 
 * @param {number} b - number
 * @returns {number}
 * @description This function returns the greatest between two numbers
 */
const greaterThan = (a, b) => {
    if(a > b){
        return a
    }else{
        if(b > a){
            return b
        }else return "They're the same"
    }
}

/**
 * @function
 * @param {number} x - number 
 * @returns {number}
 * @description Pretty sintax for a function
 */
const squares = x => x*x

greetFriend('Dummy')

if(findTextInString('arcabuz', 'cabu')){
    console.log('Found!')
}else{
    console.log('Try another word!')
}

let squareds = [ 1, 2, 3 ].map(squares);

console.log(squareds)
