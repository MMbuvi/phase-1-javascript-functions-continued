function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(duty = 'go to the office'){
    return `This Monday, I will ${ duty}.`
}
function wrapAdjective(style = "||"){
    return function (string = " a good student"){
    return `You are ${style}${string}${style}!`
}
}
