def on_bluetooth_connected():
    basic.show_icon(IconNames.HAPPY)
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    basic.show_icon(IconNames.SAD)
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

basic.show_leds("""
    . . . # .
        . . . # .
        . # # # .
        . # . # .
        . # . # .
""")

def on_forever():
    if input.pin_is_pressed(TouchPin.P0):
        absmouse.start_absolute_mouse_service()
        if input.pin_is_pressed(TouchPin.P0):
            absmouse.start_absolute_mouse_service()
basic.forever(on_forever)
