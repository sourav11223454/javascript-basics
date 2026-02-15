//  print the pattern
// input:[4,5,6]
// output:[11,10,9]

arr = [4, 5, 6]
newarr = []
sum = 0
for (let num of arr) {
    sum += num
}
console.log(sum);
for (let num of arr) {
    newarr.push(sum - num)
}
console.log(newarr);

// print all duplicate numbers
let duparray = [10, 20, 40, 10, 20, 11, 23];
let output = [];
for (let i = 0; i < duparray.length; i++) {
    for (let j = i + 1; j < duparray.length; j++) {
        if (duparray[i] == duparray[j]) {
            output.push(duparray[i]);
            break;
        }
    }
}

console.log(output);


// print the pairs whose sum is 7
ar = [2, 3, 4, 5]
for (let i = 0; i < ar.length; i++) {
    for (j = i + 1; j < ar.length; j++) {
        if (ar[i] + ar[j] == 7) {
            console.log(ar[i], ar[j]);
        }
    }
}


// print all the common number
p = [10, 33, 22, 5, 1, 42]
q = [22, 33, 10, 55]
pq = []
for (i = 0; i < p.length; i++) {
    for (j = 0; j < q.length; j++) {
        if (p[i] == q[j]) {
            pq.push(p[i])
        }
    }
}
console.log(pq);




