function maxProfit(prices, n) {
    let buy = prices[0], max_profit = 0;
    for (let i = 1; i < n; i++) {

        if (buy > prices[i])
            buy = prices[i];

        else if (prices[i] - buy > max_profit)
            max_profit = prices[i] - buy;
    }
    return max_profit;
}

let prices = [7,1,5,3,6,4];
let n = 5;
let max_profit = maxProfit(prices, n);
console.log(max_profit);