#!/usr/bin/python3
"""Write a class MyList that inherits from list"""


class MyList(list):
    """Implements sorted printing for the built-in list class."""

    def print_sorted(self):
        """Print a list in sorted ascending order."""
        sorted_list = sorted(self)
        print(sorted_list)
