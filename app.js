/**
 * @function
 * @param {String} friend - your friend's name
 * @description This function just greets and nothing else
 */
const sayHello = friend => {
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

sayHello('Dummy')

if(findTextInString('arcabuz', 'cabu')){
    console.log('Found!')
}else{
    console.log('Try another word!')
}

