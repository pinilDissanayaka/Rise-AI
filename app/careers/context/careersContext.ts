import { createContext } from 'react';

export interface CareersContextType {
  scrollToSection: (sectionId: string) => void;
  activeSection: string;
}

export const CareersContext = createContext<CareersContextType>({
  scrollToSection: () => {},
  activeSection: 'hero'
});
