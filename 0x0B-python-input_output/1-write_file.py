#!/usr/bin/python3
"""Defines a file-writing function."""


def write_file(filename="", text=""):
    """Prints a string to UTF8 text file.

    Args:
        filename (str): The name of the file to write on.
        text (str): The text to write on the file.
    Returns:
        The number of charachters written.
    """
    with open(filename, "w", encoding="utf-8") as f:
        return f.write(text)
