#!/usr/bin/python3
for i in range(122, 64, -1):
    if i >= 97:  # ASCII value of 'a'
        print("{0}".format(chr(i) if (i - 122) % 2 == 0 else chr(i - 32)), end='')
