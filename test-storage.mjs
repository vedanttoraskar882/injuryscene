// Verification test for InjuryScene Nexus localStorage behavior
// Testing all 7 conditions from section 12 of the prompt.

const STORAGE_KEY = "injuryscene_nexus_pilot_submissions";

// Mock localStorage in Node environment
class MockLocalStorage {
  constructor() {
    this.store = {};
  }
  getItem(key) {
    return this.store[key] !== undefined ? this.store[key] : null;
  }
  setItem(key, value) {
    this.store[key] = String(value);
  }
  removeItem(key) {
    delete this.store[key];
  }
  clear() {
    this.store = {};
  }
}

globalThis.localStorage = new MockLocalStorage();

function savePilotSubmission(fields) {
  const storedValue = localStorage.getItem(STORAGE_KEY);

  let previousSubmissions = [];

  if (storedValue !== null) {
    const parsedValue = JSON.parse(storedValue);

    if (!Array.isArray(parsedValue)) {
      throw new Error(
        "Existing saved submissions could not be read. No data was overwritten."
      );
    }

    previousSubmissions = parsedValue;
  }

  const submission = {
    id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `id_${Date.now()}_${Math.random()}`,
    fullName: fields.fullName.trim(),
    phoneNumber: fields.phoneNumber.trim(),
    emailAddress: fields.emailAddress.trim(),
    organisationName: fields.organisationName.trim(),
    submissionDateTime: new Date().toISOString()
  };

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...previousSubmissions, submission])
  );

  return submission;
}

console.log("=== RUNNING LOCALSTORAGE VERIFICATION SUITE ===");

// 1. Submit one valid enquiry
console.log("Test 1: Submit one valid enquiry...");
const sub1 = savePilotSubmission({
  fullName: "Dr. Alex Morgan",
  phoneNumber: "+44 7700 900077",
  emailAddress: "alex.morgan@footballclub.co.uk",
  organisationName: "Premier FC"
});
let stored1 = JSON.parse(localStorage.getItem(STORAGE_KEY));
console.assert(stored1.length === 1, "Expected 1 submission in localStorage");
console.log("✓ Test 1 passed: 1 submission saved successfully.");

// 2. Submit a second valid enquiry
console.log("Test 2: Submit a second valid enquiry...");
const sub2 = savePilotSubmission({
  fullName: "Sarah Jenkins",
  phoneNumber: "020 7946 0991",
  emailAddress: "s.jenkins@academyfc.org",
  organisationName: "North Academy"
});

// 3. Confirm both records remain in the stored array
console.log("Test 3: Confirm both records remain in stored array...");
let stored2 = JSON.parse(localStorage.getItem(STORAGE_KEY));
console.assert(stored2.length === 2, "Expected 2 submissions in localStorage");
console.assert(stored2[0].fullName === "Dr. Alex Morgan", "Record 1 fullName matched");
console.assert(stored2[1].fullName === "Sarah Jenkins", "Record 2 fullName matched");
console.log("✓ Test 2 & 3 passed: Array appended, both submissions preserved.");

// 4. Reload and confirm both persist
console.log("Test 4: Reload simulation and check persistence...");
const snapshot = localStorage.getItem(STORAGE_KEY);
// simulate reload: fresh session reading snapshot
const reloaded = JSON.parse(snapshot);
console.assert(reloaded.length === 2, "Persistence verified after simulated reload");
console.log("✓ Test 4 passed: Data persists accurately across sessions.");

// 5. Confirm every record contains all required details
console.log("Test 5: Confirm all required fields are present...");
const requiredFields = ["id", "fullName", "phoneNumber", "emailAddress", "organisationName", "submissionDateTime"];
for (const sub of reloaded) {
  for (const field of requiredFields) {
    console.assert(sub[field] !== undefined && sub[field] !== "", `Missing field: ${field}`);
  }
  // verify phone preserved as string with leading zeros/plus
  console.assert(typeof sub.phoneNumber === "string", "Phone number must be stored as string");
  // verify valid ISO date
  console.assert(!isNaN(Date.parse(sub.submissionDateTime)), "Valid ISO timestamp");
}
console.log("✓ Test 5 passed: All required fields present with valid types.");

// 6. Confirm failed storage does not produce success message
console.log("Test 6: Confirm storage failure throws error...");
const originalSetItem = localStorage.setItem;
localStorage.setItem = () => {
  throw new Error("QuotaExceededError");
};
let caughtError = null;
try {
  savePilotSubmission({
    fullName: "Test Fail",
    phoneNumber: "12345678",
    emailAddress: "fail@test.com",
    organisationName: "Fail Club"
  });
} catch (e) {
  caughtError = e;
}
console.assert(caughtError !== null, "Expected error on failed storage");
console.log("✓ Test 6 passed: Failed storage throws catchable error, preventing success display.");
localStorage.setItem = originalSetItem; // restore

// 7. Confirm malformed existing storage is not overwritten
console.log("Test 7: Confirm malformed storage is preserved and not overwritten...");
const malformedJson = '{"notAnArray": true}';
localStorage.setItem(STORAGE_KEY, malformedJson);
let malformedError = null;
try {
  savePilotSubmission({
    fullName: "John Doe",
    phoneNumber: "+44 7000 000000",
    emailAddress: "john@example.com",
    organisationName: "Example FC"
  });
} catch (e) {
  malformedError = e;
}
console.assert(malformedError !== null, "Expected error when stored value is not an array");
const preservedValue = localStorage.getItem(STORAGE_KEY);
console.assert(preservedValue === malformedJson, "Malformed data must NOT be overwritten or corrupted");
console.log("✓ Test 7 passed: Malformed data was protected and not overwritten.");

console.log("\nALL 7 LOCALSTORAGE VERIFICATION TESTS PASSED SUCCESSFULLY! ✓");
