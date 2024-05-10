#!/usr/bin/python3


def print_matrix_integer(matrix=[[]]):
    for row in matrix:
        for i, num in enumerate(row):
            # Add spaces to align colums
            if i != 0:
                print(" ", end="")
            # Print the integer with formatting
            print("{:d}".format(num), end="")
        print()
