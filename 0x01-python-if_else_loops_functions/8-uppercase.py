#!/usr/bin/python3

def uppercase(str):
    result = ""
    for char in str:
        result += chr(ord(char) - 32) if 'a' <= char <= 'z' else char
    print(result)
