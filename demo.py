#!/usr/bin/env python3
"""
Demo script to showcase the 'hello' feature.
"""

from app import process_input


def demo():
    """Demonstrate the hello feature."""
    print("=" * 60)
    print("DEMO: Hello Feature")
    print("=" * 60)
    
    test_cases = [
        ("hello", "Special response for 'hello'"),
        ("HELLO", "Case-insensitive: 'HELLO'"),
        ("HeLLo", "Case-insensitive: 'HeLLo'"),
        ("world", "Other input example"),
        ("goodbye", "Another example"),
    ]
    
    for input_text, description in test_cases:
        output = process_input(input_text)
        print(f"\n{description}")
        print(f"  Input:  '{input_text}'")
        print(f"  Output: '{output}'")
    
    print("\n" + "=" * 60)
    print("Demo completed!")
    print("=" * 60)


if __name__ == "__main__":
    demo()
