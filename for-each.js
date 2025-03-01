// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    let nameArray = [];
    arr.forEach((object) => {
        nameArray.push(object.name);
    });
    return nameArray;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    let typeArray = [];
    arr.forEach((object) => {
        typeArray.push(object.type);
    });
    return typeArray.reverse();
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const updateKeys = { name: "nombre", type: "tipo" };
    const spanishArray = changeKeys(arr, updateKeys);
    return spanishArray;
}

const changeKeys = (arr, updatedKey) => {
    return arr.map(item => {
        const newItem = {};
        Object.keys(item).forEach(key => {
            newItem[updatedKey[key]] = item[[key]];
        });
        return newItem;
    });
};

// export function makeSpanishLanguageArray(arr) {
//     let spanishArray = arr.map(({
//         name: nombre,
//         type: tipo
//     }) => ({
//         nombre,
//         tipo
//     }));
//     return spanishArray;
// }

