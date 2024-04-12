#!/usr/bin/python3
i = 122
while i >= 65:
    if i >= 97:
        print(f"{chr(i) if (i - 122) % 2 == 0 else chr(i - 32)}", end='')
    i -= 1
