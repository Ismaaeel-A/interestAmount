
//----------------------------------------------------------------------------
function interest() { //compounded interest
    let P = 10000
    let i = 10 / 100
    let n = 2

    let interest = (P * (1 + i) ** n).toFixed(2)
    console.log(interest)
}
interest()

//----------------------------------------------------------------------------
