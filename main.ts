input.onButtonPressed(Button.A, function () {
    radio.sendString("lightsON")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("colorON")
})
radio.setGroup(77)
radio.setTransmitPower(7)
basic.forever(function () {
	
})
