bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
// need bluetooth mouse service to be activated. (press A+B)
input.onButtonPressed(Button.A, function () {
    mouse.click()
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . . . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    // bluetooth mouse service activated
    mouse.startMouseService()
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . . . # .
        `)
})
basic.showLeds(`
    . . . # .
    . . . # .
    . # # # .
    . # . # .
    . # . # .
    `)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        mouse.click()
        if (input.pinIsPressed(TouchPin.P0)) {
            mouse.click()
        }
    }
})
