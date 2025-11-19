# DAEtesting2

## Project Overview
This repository contains the DAEtesting2 project - a simple interactive application that responds to user input.

## Features
- **Hello Response**: When a user inputs "hello" (case-insensitive), the system outputs "helllo agin"
- Interactive command-line interface
- Graceful exit handling

## Project Setup

### Prerequisites
- Python 3.6 or higher
- No external dependencies required (uses Python standard library)

### Installation Steps
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/DAEtesting2.git
   cd DAEtesting2
   ```

2. No additional dependencies needed
   ```bash
   # Optional: Create a virtual environment
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Run the application
   ```bash
   python3 app.py
   ```

### Usage
Once the application is running:
- Type `hello` to receive the special response: "helllo agin"
- Type any other text to see it echoed back
- Type `quit` or `exit` to close the application
- Press `Ctrl+C` to exit at any time

## Development

### Running Tests
```bash
# Run the test suite
python3 test_app.py

# Run with verbose output
python3 test_app.py -v
```

### Project Structure
```
DAEtesting2/
├── app.py              # Main application file
├── test_app.py         # Unit tests
├── requirements.txt    # Python dependencies (none required)
└── README.md          # This file
```

## Additional Resources
- Python 3 Documentation: https://docs.python.org/3/

## License
[Specify license information]
