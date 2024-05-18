function halfFryEgg(
    egg: number = 1, butter: number = 1.5, salt: number = 2): number {
    return egg + butter + salt;
}
let response: number = halfFryEgg();
console.log(
    `The total of the ingredients is ${response}`
)