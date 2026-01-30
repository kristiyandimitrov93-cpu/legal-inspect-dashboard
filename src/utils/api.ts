import { JURISDICTIONS, OUTCOMES, type Jurisdiction, type Outcome, type RelevantCase } from "../types/relativeCasesApi";

const parseJurisdiction = (jurisdiction: string): Jurisdiction => {
    if (jurisdiction in JURISDICTIONS) return jurisdiction as Jurisdiction;
    return JURISDICTIONS.US
}
const parseOutcome = (outcome: string): Outcome => {
    if (outcome in OUTCOMES) return outcome as Outcome;
    return OUTCOMES.Unknown
}

export const parseCases = (cases: RelevantCase[]): RelevantCase[] => {
    return cases.map((value) => ({
        ...value,
        jurisdiction: parseJurisdiction(value.jurisdiction),
        outcome: parseOutcome(value.outcome),
    }))
}
