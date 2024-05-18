#!/usr/bin/python3


def print_sorted_dictionary(a_dictionary):
    """
    Prints a dictionary by ordered keys.

    Parameters:
    - a_dictionary (dict): The input dictionary.

    Returns:
    - None
    """
    for key in sorted(a_dictionary.keys()):
        print(f"{key}: {a_dictionary[key]}")
