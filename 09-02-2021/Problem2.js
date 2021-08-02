

function findSmallAndLargeElement(arr1){
    let min;
    let max;

    let arrSorted = arr1.sort((a, b) => a - b);

    min = arrSorted[0];
    max = arrSorted[arrSorted.length-1];

    //used document/write for testing 
    document.write('Smallest: ' + min);
    document.write(' Largest: ' + max);
}

//test
findSmallAndLargeElement([7,3,8,2,1,4,0,5,6]);