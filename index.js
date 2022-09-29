function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`

}

// function wrapAdjective(adj = "special"){
//     const encouragingPromptFunction = wrapAdjective("!!!")
//     wrapAdjective("%")(`${adj}`)
//     return `You are ${adj}`
// }   

function wrapAdjective(style = "*" ) {
        return function (adj = "special"){
            return (`You are ${style}${adj}${style}!`)
        }
}
    // hello()
console.log(wrapAdjective)
// console.log(wrapAdjective("%"))
console.log(wrapAdjective()())
// console.log(wrapAdjective("%")("any")())

// let result = wrapAdjective("||")
// let emphatic = result("a dedicated programmer")
// console.log("result",result)
// console.log("emphatic",emphatic)
// console.log("expect",emphatic,"to equal,You are ||a dedicated programmer||! ")







 