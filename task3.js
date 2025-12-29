const temperature = {
    base : 10,
    toFahrenheit : function(){
        return (this.base * 9/5) + 32
    },
    toKelvin : function(){
        return this.base + 273
    },
    toReamur : function(){
        return this.base * 4/5
    }
}

temperature.base = 20
console.log(temperature.toFahrenheit())