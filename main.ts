basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
basic.clearScreen()
basic.forever(function () {
    basic.showString("Find a book")
    basic.showLeds(`
        # # # . .
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showString("Go to page 5")
    basic.showLeds(`
        # # # # .
        # # # . .
        # # . . .
        # . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showString("Find the 25th word")
    basic.showLeds(`
        # # # # #
        # # # # .
        # # # . .
        # # . . .
        # . . . .
        `)
    basic.pause(1000)
    basic.showString("Read it out loud")
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # .
        # # # . .
        # # . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
