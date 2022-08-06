const car = {
    manufacturer: "Toyota",
    makeAndModel: "Corolla AE101",
    engine: "1,3 2E",
    bodyStyle: "Sedan"
}
const manufacturer2 = ("Manufacturer: " + car.manufacturer)
const makeAndModel2 = ("Make and Model: " + car.makeAndModel)
const engine2 = ("Engine: " + car.engine)
const bodyStyle2 = ("Body and Syle: " + car.engine)

console.log(manufacturer2)
console.log(makeAndModel2)
console.log(engine2)
console.log(bodyStyle2)

document.getElementById("manufacturer3").innerHTML = (manufacturer2)
document.getElementById("makeAndModel3").innerHTML = (makeAndModel2)
document.getElementById("engine3").innerHTML = (engine2)
document.getElementById("bodyStyle3").innerHTML = (bodyStyle2)