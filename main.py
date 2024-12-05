def kolum3():
    global emptykolumy1
    emptykolumy1 = randint(0, 4)
    for index2 in range(5):
        if index2 != emptykolumy1:
            obstacle2.append(game.create_sprite(4, index2))

def on_button_pressed_a():
    bird.change(LedSpriteProperty.Y, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def verplaats_kolum():
    basic.pause(500)
    for index in range(4):
        for obstakel2 in obstacle2:
            obstakel2.change(LedSpriteProperty.X, -1)
        basic.pause(500)

def on_button_pressed_b():
    bird.change(LedSpriteProperty.Y, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

def kolumweg():
    global score
    while len(obstacle2) > 0 and obstacle2[0].get(LedSpriteProperty.X) == 0:
        obstacle2.remove_at(0).delete()
    score += 1
score = 0
emptykolumy1 = 0
bird: game.LedSprite = None
obstacle2: List[game.LedSprite] = []
obstacle2 = []
bird = game.create_sprite(0, 2)
bird.set(LedSpriteProperty.BLINK, 300)

def on_forever():
    for obstakel22 in obstacle2:
        if obstakel22.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) and obstakel22.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y):
            basic.show_icon(IconNames.SAD)
            basic.show_number(score)
            control.reset()
basic.forever(on_forever)

def on_forever2():
    kolum3()
    verplaats_kolum()
    kolumweg()
basic.forever(on_forever2)
