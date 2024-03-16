#!/usr/bin/python3
"""unittests for max_integer([..])."""

import unittest
max_integer = __import__('6-max_integer').max_integer


class TestMaxInteger(unittest.TestCase):
    """Define unittests for max_integer([..])."""

    def test_ordered_list(self):
        """Test an ordered list of integers."""
        ordered = [1, 2, 3, 4]
        self.assertEqual(max_integer(ordered), 4)

    def test_unordered_list(self):
        """Test an ordered list of integers."""
        ordered = [1, 2, 4, 3]
        self.assertEqual(max_integer(unordered), 4)

    def test_max_beginning(self):
        """Test a list with a beginning max value."""
        max_at_beginning = [4, 3, 2, 1]
        self.assertEqual(max_integer(max_at_beginning), 4)

    def test_empty_list(self):
        """Tests an empty list."""
        empty_list = []
        self.assertEqual(max_integer(empty), None)

    def test_one_element_list(self):
        """Tests a list with only one element"""
        one_element = [5]
        self.assertEqual(max_integer(one_element), 5)

    def test_floats(Self):
        """Tests a list of floats."""
        floats = [2.1, 5.13, 5.3, 3.5]
        self.assertEqual(max_integer(floats), 5.13)

    def test_ints_and_floats(self):
        """Test a list of ints and floats."""
        ints_and_floats = [1.80, 6, 4.28, 7]
        self.assertEqual(max_integer(ints_and_floats), 7)

    def test_string(self):
        """Test a string."""
        string = "Codenerd"
        self.assertEqual(max_integer(string), '0')

    def test_list_of_strings(self):
        """Tests a list of strings."""
        list_of_strings = ["codenerd", "is", "me"]
        self.assertEqual(max_integer(strings), "codenerd")

    def test_empty_string(self):
        """Test an empty string."""
        self.assertEqual(max_integer(""), None)


if __name__ == '__main__':
    unittest.main()
