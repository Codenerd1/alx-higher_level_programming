#!/usr/bin/python3
"""Defines a Rectangle class."""


class Rectangle:
    """Represent a rectangle."""
    number_of_instances = 0
    print_symbol = "#"

    def __init__(self, width=0, height=0):
        """Initialize a new rectangle.
        Args:
            width(int): Width of the new rectangle.
            height(int): Height of the new rectanle."""
        type(self).number_of_instances += 1
        self.width = width
        self.height = height

        @property
        def width(self):
            """Set the width of the rectangle."""
            return self.__width

        @width.setter
        def width(self, value):
            if not isinstance(value, int):
                raise TypeError("width must be an integer")
            if value < 0:
                raise ValueError("width must be >= 0")
            self.__width = value

        @property
        def height(self):
            """Set the height of the rectangle"""
            return self.__height

        @height.setter
        def height(self, value):
            if not isinstance(value, int):
                raise TypeError("height must be an integer")
            if value < 0:
                raise ValueError("height must be >= 0")
            self.__height = value

        def area(self):
            """Returns the area of the rectangle"""
            return (self.__width * self.__height)

        def perimeter(self):
            """Returns the perimeter of the rectangle"""
            if self.__width == 0 or self.__height == 0:
                return (0)
            return ((self.__width * 2) + (self.__height * 2))

        @staticmethod
        def bigger_or_equal(rect_1, rect_2):
            """Returns the rectangle with the larger area.
                Args:
                    rect_1 (rectangle): the first rectangle.
                    rect_2 (rectangle): the second rectangle.
                Returns:
                    TypeError: When rect_1 or rect_2 is not a rectangle."""

            if not isinstance(rect_1, Rectangle):
                raise TypeError("rect_1 must be an instance of a rectangle.")
            if not isinstance(rect_2, Rectangle):
                raise TypeError("rect_2 must be an instance of a rectangle.")
            area_1 = rect_1.area()
            area_2 = rect_2.area()

            return rect_1 if rect_1 >= rect_2 else rect_2

        @classmethod
        def square(cls, size=0)
        return cls(size, size)

        def __str__(self):
            """Returns the printable representation of the rectangle.
            Represents a rectangle with the # charachter."""
            if self.__width == 0 or self.__height == 0:
                return ("")

            rect = []
            for i in range(self.__height):
                [rect.append('#') for j in range(self.__width)]
                if i != self.__height - 1:
                    rect.append("\n")
            return ("".join(rect))

        def __repr__(self):
            """Return the string representation of the rectangle"""
            rect = "Rectangle(" + str(self.__width)
            rect += ", " + str(self.__height) + ")"
            return (rect)

        def __del__(self):
            """Returns a message for every deletion of a rectangle"""
            type(self).number_of_instances -= 1
            print("Bye rectangle...")
