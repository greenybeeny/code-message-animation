input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . # # # .
            # # . # #
            # . # . #
            # # . # #
            . # # # .
            `)
        basic.pause(200)
        basic.showLeds(`
            . # # # .
            # . # . #
            # # . # #
            # . # . #
            . # # # .
            `)
        basic.pause(200)
    }
    basic.pause(200)
    basic.showString("SET AN ALARM!")
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . . .
            . # . . .
            . # # . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            # # # # .
            . . # . .
            . # . . .
            # # # # .
            `)
        basic.pause(200)
        basic.showLeds(`
            # # # # #
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
        basic.pause(200)
    }
    basic.pause(200)
    basic.showString("Sleep Well!")
})
