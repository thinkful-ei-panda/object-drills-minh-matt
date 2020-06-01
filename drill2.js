let myObj = {foo : 1,
            bar: 2,
            fum: 3,
            quux: 4,
            spam: 5};

for (let key in myObj) {
    console.log(key + ":" + myObj[key]);
}