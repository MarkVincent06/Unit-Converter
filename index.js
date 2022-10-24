const valueInputEl = document.getElementById("hero--value-field")
const convertBtn = document.getElementById("convert-btn")

const lengthParDom = document.getElementById("length-par")
const volumeParDom = document.getElementById("volume-par")
const massParDom = document.getElementById("mass-par")

let value = ""

convertBtn.addEventListener("click", ()=> {
    value = valueInputEl.value
    convertUnits(value)
})

function convertUnits(value) {
    let feet = value * 3.281
    let meter = value * 0.304

    let gallon = value * 0.264
    let liter = value * 3.785411784

    let kilo = value * 0.45359237
    let pound = value * 2.204

    lengthParDom.innerHTML = `
        <p id="length-par">
            ${value} meters = ${feet.toFixed(3)} feet | ${value} feet = ${meter.toFixed(3)} meters
        </p>
    `

    volumeParDom.innerHTML = `
        <p id="volume-par">
            ${value} liters = ${gallon.toFixed(3)} gallons | ${value} gallons = ${liter.toFixed(3)} liters
        </p>
    `
    massParDom.innerHTML = `
        <p id="mass-par">
            ${value} kilos = ${pound.toFixed(3)} pounds | ${value} pounds = ${kilo.toFixed(3)} kilos
        </p>
    `
}