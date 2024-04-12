#!/usr/bin/python3
def uppercase(string):
    result = ''.join(chr(ord(char) - 32) if 'a' <= char <= 'z'
                     else char for char in string)
    print("{0}".format(result))
