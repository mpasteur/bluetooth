bluetooth.onBluetoothConnected(function () {
    led.plot(0, 0)
    connected = 1
    while (connected == 1) {
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        200,
        600,
        255,
        0,
        150,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
        message = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Comma))
        serial.writeLine("Recu [" + message + "]")
        if (message.substr(0, 1) == "L") {
            basic.showArrow(ArrowNames.East)
            basic.pause(100)
            basic.clearScreen()
        } else if (message.substr(0, 1) == "R") {
            basic.showArrow(ArrowNames.West)
            basic.pause(100)
            basic.clearScreen()
        } else {
            serial.writeString("--> Message inconnu")
        }
    }
})
bluetooth.onBluetoothDisconnected(function () {
    connected = 0
})
let message = ""
let connected = 0
music.play(music.createSoundExpression(
WaveShape.Sine,
200,
600,
255,
0,
150,
SoundExpressionEffect.None,
InterpolationCurve.Linear
), music.PlaybackMode.LoopingInBackground)
let Ordre = -1
input.setSoundThreshold(SoundThreshold.Loud, 251)
bluetooth.startUartService()
music.stopAllSounds()
music.stopAllSounds()
