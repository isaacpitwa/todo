package logger

import (
	"log"
	"os"
)

// Init initializes the logger
func Init() {
	log.SetOutput(os.Stdout)
	log.SetFlags(log.Ldate | log.Ltime | log.Lshortfile)
}
