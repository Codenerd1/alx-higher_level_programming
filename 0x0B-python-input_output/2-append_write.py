#!/usr/bin/python3
"""Defines a file-appending function."""


def append_write(filename="", text=""):
    """A function to append a string at the end of a UTF8 file.
    Args:
        filename (str): Name of the file to appen on.
        text (str): The string to append on the UTF8 file.
    Returns:
        The number of appended charachters.
    """
    with open(filename, "a", encoding="utf-8") as f:
        return f.write(text)
