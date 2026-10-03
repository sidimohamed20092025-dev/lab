// Content structure only. Display names live in src/i18n/*.json (keys: cat.<id>, family.<id>).
export type FamilyId = 'physics' | 'chemistry' | 'both'
export interface Family { id: FamilyId; categories: string[] }

export const FAMILIES: Family[] = [
  { id: 'physics', categories: ['mechanics','waves','optics','electricity','magnetism','thermodynamics','fluids','modern'] },
  { id: 'chemistry', categories: ['matter','reactions','acidsBases','solutions','gases','redox','kinetics','separation'] },
  { id: 'both', categories: ['gasLaws','electrochemistry','phaseChanges','diffusion','density','combustion'] },
]
export const getFamily = (id?: string) => FAMILIES.find(f => f.id === id)
