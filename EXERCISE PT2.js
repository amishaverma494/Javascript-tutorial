//function, return ,if ,arrays ,for loop

const gas=[20,40,100,30];
const food=[10,40,50];

function calculateTotal (arr){
    let total =0;
    for(let i=0;i< arr.length ;i++){
        console.log (arr[i]);

    }
if (total>100) {
    console.log('WHOA! YOU ARE SPENDING WAY TOO MUCH');
    return total;
}
 console.log('you are good total is less than 100');
return total;
}

const gasTotal= calculateTotal(gas);
const foodTotal= calculateTotal(food);
const randomTotal= calculateTotal([200,4000,500,1]);
console.log({
    gas:gasTotal,
    food:foodTotal,
    random:randomTotal,
});
