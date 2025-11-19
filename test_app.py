#!/usr/bin/env python3
"""
Unit tests for the app.py module.
"""

import unittest
from app import process_input


class TestProcessInput(unittest.TestCase):
    """Test cases for the process_input function."""
    
    def test_hello_lowercase(self):
        """Test that 'hello' input returns 'helllo agin'."""
        result = process_input("hello")
        self.assertEqual(result, "helllo agin")
    
    def test_hello_uppercase(self):
        """Test that 'HELLO' input returns 'helllo agin'."""
        result = process_input("HELLO")
        self.assertEqual(result, "helllo agin")
    
    def test_hello_mixed_case(self):
        """Test that 'HeLLo' input returns 'helllo agin'."""
        result = process_input("HeLLo")
        self.assertEqual(result, "helllo agin")
    
    def test_other_input(self):
        """Test that other inputs are echoed back."""
        result = process_input("world")
        self.assertEqual(result, "You said: world")
    
    def test_empty_input(self):
        """Test that empty input is echoed back."""
        result = process_input("")
        self.assertEqual(result, "You said: ")


if __name__ == "__main__":
    unittest.main()
