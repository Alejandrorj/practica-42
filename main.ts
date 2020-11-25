input.onButtonPressed(Button.A, function () {
    music.ringTone(262)
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playMelody("C5 B A G F E D C ", 100)
    music.playMelody("C D E F G A B C5 ", 100)
})
input.onButtonPressed(Button.B, function () {
    music.ringTone(262)
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playMelody("C5 G B F E G B C5 ", 100)
    music.playMelody("C5 B G E F B G C5 ", 100)
})
basic.forever(function () {
	
})
