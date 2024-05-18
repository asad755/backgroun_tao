let halfFryEgg = (egg: number, butter: number, salt: number): number => {
    let cocked = egg + butter + salt;
    return cocked;
};
let response: number = halfFryEgg(2, 2, 2);
console.log(response);