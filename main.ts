input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        basic.showString("A+E=")
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Heart)
            basic.pause(500)
            basic.showIcon(IconNames.SmallHeart)
            basic.pause(500)
            basic.clearScreen()
        }
    }
})
basic.forever(function () {
	
})
