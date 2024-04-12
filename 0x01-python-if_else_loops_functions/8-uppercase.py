#!/usr/bin/python3
def uppercase(str):
    result = ""
    for char in str:
        ascii_value = ord(char)
        if 97 <= ascii_value <= 122:
            ascii_value -= 32
        result += chr(ascii_value)
    return result
