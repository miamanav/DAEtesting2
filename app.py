#!/usr/bin/env python3
"""
Simple application that responds to user input.
When user inputs "hello", the system outputs "helllo agin".
"""


def process_input(user_input):
    """
    Process user input and return appropriate response.
    
    Args:
        user_input (str): The input string from the user
        
    Returns:
        str: The response based on the input
    """
    if user_input.lower() == "hello":
        return "helllo agin"
    return f"You said: {user_input}"


def main():
    """
    Main function to run the interactive application.
    """
    print("Welcome! Type 'hello' to get a special response.")
    print("Type 'quit' or 'exit' to stop the program.")
    print("-" * 50)
    
    while True:
        try:
            user_input = input("\nEnter your message: ").strip()
            
            # Check for exit commands
            if user_input.lower() in ['quit', 'exit']:
                print("Goodbye!")
                break
            
            # Process the input
            response = process_input(user_input)
            print(f"System: {response}")
            
        except KeyboardInterrupt:
            print("\n\nGoodbye!")
            break
        except EOFError:
            print("\n\nGoodbye!")
            break


if __name__ == "__main__":
    main()
