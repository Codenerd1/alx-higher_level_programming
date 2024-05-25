#!/usr/bin/python3


def complex_delete(a_dictionary, value):
    # Create a new dictionary to store updated key-value
    new_dict = {}

    # Iterate over key-value pairs in original dictionary
    for key, val in a_dictionary.items():
        # If value of specified key is not equal to specified value
        # Add it to the new dictionary
        if val != value:
            new_dict[key] = val

    # Update the original dictionary with the new dictionary
    a_dictionary.clear()  # Clear the original dictionary.
    a_dictionary.update(new_dict)  # Update with  the new dictionary
    return new_dict
