#!/usr/bin/python3


def uniq_add(my_list=[]):
    """
    Adds all unique integers in a list (each integer is added only once).

    Parameters:
    - my_list (list): The input list of integers.

    Returns:
    - int: The sum of all unique integers in the input list.
    """
    # Initializes a set to store unique integers
    unique_integers = set()

    # Add each unique integer from the list to the set
    for num in my_list:
        unique_integers.add(num)

    # Sum up the elements of the set
    sum_unique = sum(unique_integers)

    return sum_unique
