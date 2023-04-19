//Write a program to find the sum of all the elements in an array using a for loop and display the result in the DOM.

var arr = [1, 2, 3, 4, 5];
var i;
var len = arr.length;
len = len-1;
var sum = 0;
for(i=0;i<=len;i++){   
    var num = arr[i];
    sum = num + sum;
    document.getElementById('arrNum').innerHTML = document.getElementById('arrNum').innerHTML +'<br>' +arr[i];
    document.getElementById('ans').innerHTML = sum;
}
