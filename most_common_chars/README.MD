# Most Common Characters Challenge

This repository contains a solution to the "Most Common Characters" challenge. The goal of the challenge is to find the most common characters in a given string. For example, in the word "annoying", the most common character is 'n'. In the word "implementation", the most common characters are 'i', 'm', 'e', 't', 'n'.

## Solution

The solution is implemented in Go. The `findMostCommonCharacters` function takes a string as input and returns a slice of runes representing the most common characters in the string.

### How It Works

1. The function counts the frequency of each character in the input string.
2. It then finds the maximum frequency.
3. Finally, it collects and returns all characters that have the maximum frequency.

## Running the Code

### Prerequisites

- Go (version 1.22 or higher)

### Steps

1. Clone the repository:

    ```sh
    git clone https://github.com/isaacpitwa/coding_test.git
    cd coding_test/most-common-characters
    ```

2. Run the code:

    ```sh
    go run main.go
    ```

### Example Output

When you run the code, you should see output similar to the following:

```sh
In word "annoying", the most common characters are [n]
In word "implementation", the most common characters are [i m e t n]
In word "example string with some characters", the most common characters are [ ]
```