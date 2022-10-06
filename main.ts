bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
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
    	
    }
})
