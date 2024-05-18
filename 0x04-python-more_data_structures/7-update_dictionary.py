#!/usr/bin/python3


def update_dictionary(a_dictionary, key, value):
    """
    Replaces or adds key/value in a dictionary.

    Parameters:
    - a_dictionary (dict): The dictionary to update.
    - key (str): The key to update or add.
    - value (any): The value to set for the specified key.

    Returns:
    - dict: The updated dictionary
    """
    a_dictionary[key] = value
    return a_dictionary
