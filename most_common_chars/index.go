
package main
import (
    "fmt"
)

// findMostCommonCharacters returns a set of the most common characters in the given string.
// For example:
// In word "annoying", the most common character is {'n'}
// In word "implementation", the most common characters are {'i', 'm', 'e', 't', 'n'}
func findMostCommonCharacters(input string) []rune {
    charCount := make(map[rune]int)

    // Count frequency of each character
    for _, char := range input {
        charCount[char]++
    }

    // Find the maximum frequency
    maxCount := 0
    for _, count := range charCount {
        if count > maxCount {
            maxCount = count
        }
    }

    // Collect characters with maximum frequency
    var result []rune
    for char, count := range charCount {
        if count == maxCount {
            result = append(result, char)
        }
    }

    return result
}

func main() {
    examples := []string{
        "annoying",
        "implementation",
        "example string with some characters",
    }

    for _, input := range examples {
        mostCommonChars := findMostCommonCharacters(input)
        fmt.Printf("In word \"%s\", the most common characters are %c\n", input, mostCommonChars)
    }
}
