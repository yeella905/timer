// Slice the command line arguments to get only the times
const args = process.argv.slice(2);

// Convert to numbers and filter invalid ones
const times = args
  .map(Number) // Convert each string to a number
  .filter(time => !isNaN(time) && time >= 0); // Keep only valid, non-negative numbers

// Schedule a beep for each valid time number
times.forEach(time => {
  setTimeout(() => {
    process.stdout.write("\x07"); // Beep sound
    console.log(`Beep at ${time} seconds!`); // Optional: Log when the beep happens
  }, time * 1000); // Convert time to milliseconds
});

