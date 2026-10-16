import type { PilotSubmission, PilotFormFields } from '../types';

export const STORAGE_KEY = 'injuryscene_nexus_pilot_submissions';

export function savePilotSubmission(
  fields: PilotFormFields
): PilotSubmission {
  const storedValue = localStorage.getItem(STORAGE_KEY);

  let previousSubmissions: PilotSubmission[] = [];

  if (storedValue !== null) {
    const parsedValue: unknown = JSON.parse(storedValue);

    if (!Array.isArray(parsedValue)) {
      throw new Error(
        'Existing saved submissions could not be read. No data was overwritten.'
      );
    }

    previousSubmissions = parsedValue as PilotSubmission[];
  }

  const generatedId =
    typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `isn_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;

  const submission: PilotSubmission = {
    id: generatedId,
    fullName: fields.fullName.trim(),
    phoneNumber: fields.phoneNumber.trim(),
    emailAddress: fields.emailAddress.trim(),
    organisationName: fields.organisationName.trim(),
    submissionDateTime: new Date().toISOString(),
  };

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...previousSubmissions, submission])
  );

  return submission;
}

export function getStoredSubmissions(): PilotSubmission[] {
  try {
    const storedValue = localStorage.getItem(STORAGE_KEY);
    if (!storedValue) return [];
    const parsed = JSON.parse(storedValue);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
