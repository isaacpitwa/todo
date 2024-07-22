package models

import "time"

// Status defines the status of a to-do item
type Status string

const (
	// Pending indicates the to-do item is not yet completed
	Pending Status = "pending"
	// Completed indicates the to-do item is completed
	Completed Status = "completed"
)

// Todo represents a to-do item
type Todo struct {
	ID        int       `json:"id"`        // Unique identifier for the to-do item
	Task      string    `json:"task"`      // Description of the to-do item
	Status    Status    `json:"status"`    // Status of the to-do item (pending or completed)
	CreatedAt time.Time `json:"createdAt"` // Timestamp when the to-do item was created
	UpdatedAt time.Time `json:"updatedAt"` // Timestamp when the to-do item was last updated
}
