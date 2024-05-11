#!/usr/bin/python3


def delete_at(my_list=[], idx=0):
    # Check if idx is negative or out of range
    if idx < 0 or idx >= len(my_list):
        return my_list

    # Iterate over the list and shift elements to the left
    for i in range(idx, len(my_list) - 1):
        my_list[i] = my_list[i + 1]

    # Delete the last element which has been duplicated at the end
    del my_list[-1]

    return my_list
