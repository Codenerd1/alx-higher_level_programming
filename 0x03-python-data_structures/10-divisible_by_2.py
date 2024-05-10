#!/usr/bin/python3


def divisible_by_2(my_list=[]):
    # Initialize an empty list to store the result
    result = []

    # Iterate over each integer in the input list
    for num in my_list:
        # Check if the integer is divisible by 2
        if num % 2 == 0:
            result.append(True)
        else:
            result.append(False)

    return result
