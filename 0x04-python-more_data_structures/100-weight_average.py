#!/usr/bin/python3


def weight_average(my_list=[]):
    """
    Calculate the weighted average of a list of tuples (score, weight).

    Args:
    my_list (list of tuples): A list of tuples containing score and weeight.

    Returns:
    float: The weighted average of the scores. Returns 0 if the list is empty.
    """
    # Check if the list is empty
    if not my_list:
        return 0

    # Initialized total weighted score and total weight
    total_weighted_score = 0
    total_weight = 0

    # Iterate through the list of tuples
    for score, weight in my_list:
        # Update the total weighted score by adding score multiplied by weight
        total_weighted_score += score * weight
        # Update the total weight by adding the weight
        total_weight += weight

    # If the total weight is 0, return 0 to avoid division by zero
    if total_weight == 0:
        return 0

    # Return the weighted average
    return total_weighted_score / total_weight
