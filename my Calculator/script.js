class my Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement     
    }
    



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
equalButton = document.querySelector('[data-equals]')
deleteButton = document.querySelector('[data-delete]')
allClearButton = document.querySelector('[data-all-clear]')
previousOperandTextElement = document.querySelector('[data-previous-operand]')
currentOperandTextElement = document.querySelector('[data-current-operand]')

