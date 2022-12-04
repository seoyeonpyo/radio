input.onButtonPressed(Button.A, function () {
    radio.sendString("lightsON")
})
radio.setGroup(77)
radio.setTransmitPower(7)
basic.forever(function () {
	
})
