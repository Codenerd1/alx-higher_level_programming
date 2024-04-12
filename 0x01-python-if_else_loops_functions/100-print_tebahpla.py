#!/usr/bin/python3
for i in range(122, 64, -1):
    if i >= 97:
        print(f"{chr(i) if (i - 122) % 2 == 0 else chr(i - 32)}", end='')
