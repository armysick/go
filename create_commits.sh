#!/bin/bash

# Ensure we're inside a Git repository
if [ ! -d ".git" ]; then
    echo "This is not a Git repository!"
    exit 1
fi

# Make sure there is a file to modify (e.g., 'example.txt')
if [ ! -f "example.txt" ]; then
    echo "example.txt not found! Creating it now..."
    echo "Initial content" > example.txt
    git add example.txt
    git commit -m "Initial commit"
fi

# Create 100 commits
for i in {1..100}
do
    # Modify the file in some way
    echo "Making change #$i" >> example.txt

    # Stage and commit the change
    git add example.txt
    git commit -m "Commit #$i"

    # Optional: Output the commit number to track progress
    echo "Commit #$i created"
done

echo "100 commits created!"
