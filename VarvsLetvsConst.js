// Classroom Assignment: var vs let vs const

// Step 1-2. Global const browserVersion with value "Chrome"
const browserVersion = "Chrome";

// Used only for the if-check (requirement 4)
const browserName = "Chrome";

// Step 3-6. Function using var: the local var is hoisted to function scope,
// so it is still visible outside the if block (inside the function)
function getBrowserVersion() {
    if (browserName === "Chrome") {
        var browserVersion = "Chrome 120.0 (var local)";
    }
    // Printed outside the if block, inside the function
    console.log("getBrowserVersion Using var:", browserVersion);
}
// Note: var is function scoped

// Same function converted to let: the local let is block scoped,
// so outside the if block the global const "Chrome" is visible again
function getBrowserVersionLet() {
    if (browserName === "Chrome") {
        let browserVersion = "Chrome 120.0 (let local)";
    }
    // Printed outside the if block, inside the function
    console.log("getBrowserVersion Using Let:", browserVersion);
}

getBrowserVersion();
getBrowserVersionLet();

// Note: let is block scoped.
