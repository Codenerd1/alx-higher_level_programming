#!/usr/bin/python3
def print_last_digit(number):
    last_digit = abs(number) % 10
    print(str(last_digit), end="")
    return str(last_digit)
