#!/usr/bin/python3
"""Defines a base geometry class BaseGeometry."""


class BaseGeometry:
    """A class that represent base geometry."""

    def area(self):
        """Public instance method indicating that area is not implemented."""
        raise Exception("area() is not implemented")
