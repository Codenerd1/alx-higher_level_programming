#!/usr/bin/python3


def roman_to_int(roman_string):
    """
    Converts a Roman numeral to an integer.

    Args:
    - roman_string (str): A string representing a Roman numeral.

    Returns:
    int: The integer equivalent to the Roman numeral.

    Example:
    >>> roman_to_int('III')
    3
    """

    # Check if the input is valid string
    if not isinstance(roman_string, str) or roman_string is None:
        return 0

    # Dictionary mapping Roman numerals to integers
    roman_numerals = {
            'I': 1, 'V': 5, 'X': 10, 'L': 50,
            'C': 100, 'D': 500, 'M': 1000
            }

    result = 0  # Initialize the result
    prev_value = 0  # Initialize the previous value for comparison

    # Iterate through the Roman numeral string in reverse order
    for char in roman_string[::-1]:
        value = roman_numerals[char]  # Get the int of the current charachter
        # If the value of the current character is less than the previous one,
        # substract it from the result
        if value < prev_value:
            result -= value

        else:
            result += value
        prev_value = value  # Update the previous value for next iteration

    return result  # Return the final result
