/**
 * Consider the example of Sorting, we implemented bubble sort but the data started
 * to grow and bubble sort started getting slow. In order to tacke this we implemented Quick sort
 * But now although quick sort algo was doing better for large datasets, it was very slow for smaller datasets.
 * Inorder to handle this we implemented a strategy where for small datasets, bubble sort willmbe used 
 * and for large datasets quick sort
 * 
 * 
 * Strategy pattern allows you to switch the algorithm or stragegy or based upon the situation
 */

const bubbleSort = dataset =>{
    console.log('Sorting with bubble sort');

    return dataset;
}

const quickSort = dataset => {
    console.log('Sorting with quick sort');

    return dataset;
}

const sorter = dataset => {
    if(dataset.length > 5){
        return quickSort;
    }else{
        return bubbleSort;
    }
}


const longDataSet = [1,2,3,4,5,6,7,8];
const shortDataSet = [3,6,8];

const sorter1 = sorter(longDataSet);
const sorter2 = sorter(shortDataSet);

console.log(sorter1);
sorter1(longDataSet);
sorter2(shortDataSet);