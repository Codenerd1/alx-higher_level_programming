#!/usr/bin/python3


def best_score(a_dictionary):
    """
    Returns the key with the biggest integer value

    Parameters:
    - a_dictionary (dict): The input dictionary with integer values

    Returns:
    - str: The key with the biggest integer value.
           If no score is found or the input is not a dictionary, returns None
    """
    # Check if the input is a dictionary
    if not isinstance(a_dictionary, dict):
        return None

    # Initialize variables to keep track of the best score
    best_key = None
    best_value = float('-inf')  # Initialize to negative infinity to ensure
    # any value is greater.

    # Iterate over the dictionary items
    for key, value in a_dictionary.items():
        # If the current value is greater than the current best value, update
        # the best key and value
        if value > best_value:
            best_key = key
            best_value = value

    # Return the key with the biggest integer value
    return best_key
