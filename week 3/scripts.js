const object = {
    value: 42,
    displayValue: function() {
        return this.value
    }
}

console.log(object.displayValue() + object.value)