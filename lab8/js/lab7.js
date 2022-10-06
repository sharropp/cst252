/**
 * Author:    Squantio
 * Created:   09.26.2022
 *
 * (c) Copyright by scrabungus Corp.
 **/

var sortingArray = [10, 95, 200];
sortingArray.sort(function (a, b) {
    return a - b;
});

let addOne = (number) => {
 return number + 1;
}

sortingArray.map(addOne);
