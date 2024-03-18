#!/usr/bin/python3
# 6-from_json_string.py
"""
Defines a function that returns the object represented by a JSON string.
"""
import json


def from_json_string(my_str):
    """Returns the Python object representation of a JSON string."""
    return json.loads(my_str)
