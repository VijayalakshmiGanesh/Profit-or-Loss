var initialPrice = document.querySelector("#initial-price")
var noOfStocks = document.querySelector("#no-of-stocks")
var currentPrice = document.querySelector("#current-price")
var submit = document.querySelector("#submit")
var result = document.querySelector("#result")

submit.addEventListener("click", clickHandler)

function clickHandler() {



    var sellingPrice = Number(currentPrice.value)
    var costPrice = Number(initialPrice.value)
    var numberOfStocks = Number(noOfStocks.value)

    // console.log(costPrice)
    if (sellingPrice == 0 || costPrice == 0 || numberOfStocks == 0) {
        alert("Enter all neccessary values")
        return
    }
    var calculate = {
        profitOrLoss: '',
        amount: 0,
        percent: 0
    }

    if (sellingPrice > costPrice) {
        //Profit Logic
        calculate = calculateProfit(sellingPrice, costPrice, numberOfStocks)
        result.style.color = "#074000";
        // console.log(calculate)

    } else if (sellingPrice < costPrice) {
        //Loss Logic
        calculate = calculateLoss(sellingPrice, costPrice, numberOfStocks)
        result.style.color = "#B00000";

    } else if (sellingPrice === costPrice) {
        result.innerText = "Neither profit Nor loss"
        result.style.color = "black";
        return
    }

    result.innerText = `The ${calculate.profitOrLoss} is ${calculate.amount} and the ${calculate.profitOrLoss} percentage is ${calculate.percent}% `
}

function calculateProfit(sellingPrice, costPrice, numberOfStocks) {
    var profit = (sellingPrice - costPrice) * numberOfStocks
    var profitPercentage = (profit / costPrice) * 100
    return { profitOrLoss: "profit", amount: profit, percent: profitPercentage }

}

function calculateLoss(sellingPrice, costPrice, numberOfStocks) {
    var loss = (costPrice - sellingPrice) * numberOfStocks
    var lossPercentage = (loss / costPrice) * 100
    return { profitOrLoss: "loss", amount: loss, percent: lossPercentage }


}