#!usr/bin/python3
"""Defines a function that adds attributes to objects."""


def add_attribute(obj, att, value):
    """Add a new attribute to an object if possible.

        Args:
            obj (any): The object to add an attribute to.
            att (str): The name of the attribute to add to obj.
            value (any): The value of att.
        Raises:
            TypeError: If the attribute cannot be added.
    """
    if isinstance(obj, object):
        setattr(obj, att, value)
    else:
        raise TypeError("can't add new attribute")
