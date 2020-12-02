/**
 * A function which takes an array of integers and an integer which defines the number of sub arrays 
 * the first array will be split into  
 * 
 * @param originalArray an array of integers which will be divided into a number of sub arrays  
 * @param numberOfSubArrays an integer used as the number of sub arrays the main array is split into
 * 
 * @Return A 2D array made up of the original array split into sub arrays  
 */
function splitArrayEvenly (originalArray, numberOfSubArrays) {

    let new2DArray = [];
    let numberOfElements;

    if(!Array.isArray(originalArray)){
        return [];
    } else {
        numberOfElements = originalArray.length /numberOfSubArrays;
    }

    if(numberOfSubArrays < 1 || numberOfSubArrays > originalArray.length){
        return originalArray;
    }


    for(let i = 0; i < originalArray.length; i += numberOfElements){
        let currentSectionOfArray = originalArray.slice(i, i+numberOfElements);
        new2DArray.push(currentSectionOfArray);
    }

    return new2DArray;
}

module.exports = splitArrayEvenly;