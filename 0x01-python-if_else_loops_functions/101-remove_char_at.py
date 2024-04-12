#!/usr/bin/python3
def remove_char_at(str, n):
    if n < 0 or n >= len(str):  # Check if n is out of bounds
        return str
    return str[:n] + str[n+1:]
