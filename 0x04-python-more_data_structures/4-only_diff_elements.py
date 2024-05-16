#!/usr/bin/python3


def only_diff_elements(set_1, set_2):
    """
    Returns a set of all elements present in only one set.

    Parameters:
    - set_1 (set): The first set.
    - set_2 (set): The second set.

    Returns:
    - set: A set containing elements that are present in only one of sets.
    """
    # Compute the symmetric difference between set_1 and set_2
    diff_set = set_1 ^ set_2
    return diff_set
