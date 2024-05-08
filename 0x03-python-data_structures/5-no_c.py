#!/usr/bin/python3


def no_c(my_string):
    # Initialize an empty string to store the result
    result = ""

    # Iterate over each charachter in the string
    for char in my_string:
        # Check if the charachter is not 'c' or 'C'
        if char != 'c' and char != 'C':
            # Append the charachter to the result string
            result += char

    # Return the resulting string
    return result
