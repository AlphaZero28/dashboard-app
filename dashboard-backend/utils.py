def get_password():
    try:
        with open('password.txt', 'r') as file:
            line = file.readline().strip()
            return line
    except FileNotFoundError:
        print(f"Error: File not found.")
        return None
    except Exception as e:
        print(f"Error occurred while reading the file: {e}")
        return None
