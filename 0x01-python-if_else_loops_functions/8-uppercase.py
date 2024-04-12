#!/usr/bin/python3

def uppercase(str):
    result = ""
    for char in str:
        if 'a' <= char <= 'z':
            uppercase_ascii = ord(char) - ord('a') + ord('A')
            result += chr(uppercase_ascii)
        else:
            result += char
    print(result)
