radio.onReceivedNumber(function (receivedNumber) {
    tuplai = randint(1, 3)
    if (tuplai == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.pause(1500)
        if (receivedNumber == 3) {
            basic.showIcon(IconNames.Happy)
        } else if (receivedNumber == 2) {
            basic.showIcon(IconNames.Sad)
            basic.showIcon(IconNames.No)
        }
    } else if (tuplai == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else if (tuplai == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    plai = randint(1, 3)
    radio.sendNumber(plai)
    if (plai == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (plai == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else if (plai == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
})
let tijeras = 0
let papel = 0
let piedra = 0
let plai = 0
let tuplai = 0
radio.setGroup(51)
basic.forever(function () {
    piedra += 1
    papel += 2
    tijeras = 3
})
