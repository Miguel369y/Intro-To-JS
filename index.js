let reservoir_volume = 4.445e8

let rainfall = 5e6

let runoff = 0.9 * rainfall

reservoir_volume += rainfall

// let stormwater = reservoir_volume * 1.05
reservoir_volume *= 1.05

// let evaporation = reservoir_volume * 0.9
reservoir_volume *= 0.9

reservoir_volume -= 2.5e5

console.log(reservoir_volume)
