export interface RelevantCasesResponse {
    total: number;
    cases: RelevantCase[]
}
export const JURISDICTIONS = {
    US: "US",
    UK: "UK",
    EU: "EU",
} as const;

export type Jurisdiction = typeof JURISDICTIONS[keyof typeof JURISDICTIONS];

export const OUTCOMES = {
    Win: "Win",
    Loss: "Loss",
    Settled: "Settled",
    Unknown: "Unknown",
} as const;

export type Outcome = typeof OUTCOMES[keyof typeof OUTCOMES];

export interface RelevantCase {
    id: string;
    caseName: string;
    jurisdiction: Jurisdiction;
    year: number;
    relevance: number;
    clauseMatch: string;
    outcome: Outcome;
}