basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showIcon(IconNames.House)
    } else {
        basic.clearScreen()
    }
})
