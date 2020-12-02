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