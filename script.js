// Global object
const sampleObject = {
  red: "#FF0000",
  green: "#00FF00",
  white: "#FFFFFF"
};

// Function to check if the key exists in sampleObject
function hasKey(key) {
  return sampleObject.hasOwnProperty(key);
}

// Example usage:
console.log(hasKey("red"));    // true
console.log(hasKey("blue"));   // false
console.log(hasKey("white"));  // true
