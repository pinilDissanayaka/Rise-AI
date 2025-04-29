"use client";
import { createContext } from 'react';

interface CareersContextType {
  scrollToSection: (sectionId: string) => void;
  activeSection: string;
}

export const CareersContext = createContext<CareersContextType>({
  scrollToSection: () => {},
  activeSection: 'hero'
});
