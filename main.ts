// Funktion: Spiel starten
function startGame () {
    // Variablen initialisieren
    p = 0
    // Startgeschwindigkeit in Millisekunden
    speed = 1000
    // Spieler initialisieren
    man = game.createSprite(2, 3)
    // Fallendes Objekt initialisieren
    zug = game.createSprite(2, 0)
    // Anfangszustand der unteren Reihe löschen
    clearBottomRow()
    // Spielschleife
    while (true) {
        while (!(man.isTouching(zug))) {
            // Zug bewegt sich nach unten
            zug.change(LedSpriteProperty.Y, 1)
            // Wartezeit basierend auf Geschwindigkeit
            basic.pause(speed)
            // Prüfen, ob zug den Rand erreicht
            if (zug.isTouchingEdge()) {
                // Punkt hinzufügen
                p += 1
                // Untere Reihe löschen
                clearBottomRow()
                // Zug oben neu generieren
                resetZug()
                // Geschwindigkeit erhöhen (beschleunigt schrittweise)
                if (speed > 200) {
                    // Mindestgeschwindigkeit
                    // Geschwindigkeit reduzieren (wird schneller)
                    speed += 0 - 50
                }
            }
        }
        // Wenn man zug berührt, Spielende
        basic.clearScreen()
        // Punktestand anzeigen
        basic.showString("" + (p))
        // Spielschleife beenden
        break;
    }
    // Nach Spielende Sprites löschen
    man.delete()
    zug.delete()
    // Zeigt an, dass das Spiel neu gestartet werden kann
    basic.showString("" + (p))
}
// Variablen deklarieren
input.onButtonPressed(Button.A, function () {
    if (man.get(LedSpriteProperty.X) > 1) {
        man.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.AB, function () {
    // Startet das Spiel
    startGame()
})
input.onButtonPressed(Button.B, function () {
    if (man.get(LedSpriteProperty.X) < 3) {
        man.change(LedSpriteProperty.X, 1)
    }
})
// Funktion: untere Reihe löschen
function clearBottomRow () {
    for (let x = 1; x <= 3; x++) {
        let sprite = game.createSprite(x, 4)
        sprite.delete() // Sofort löschen
    }
}
// Funktion: zufällige Position für zug
function resetZug () {
    // Entfernt den aktuellen Sprite
    zug.delete()
    // Zufallszahl zwischen 1 und 3
    zufall = randint(1, 3)
    // Neuer Sprite oben
    zug = game.createSprite(zufall, 0)
}
let zufall = 0
let zug: game.LedSprite = null
let man: game.LedSprite = null
let p = 0
let speed = 0
// Variablen deklarieren
let zufall2 = 0
// Startgeschwindigkeit in Millisekunden
speed = game.createSprite(0, 0)
// Ränder erstellen (linker und rechter Rand)
let leftBorder = [
game.createSprite(0, 0),
game.createSprite(0, 1),
game.createSprite(0, 2),
game.createSprite(0, 3),
game.createSprite(0, 4)
]
let rightBorder = [
game.createSprite(4, 0),
game.createSprite(4, 1),
game.createSprite(4, 2),
game.createSprite(4, 3),
game.createSprite(4, 4)
]
basic.showString("" + (p))
