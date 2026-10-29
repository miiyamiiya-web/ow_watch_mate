import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type GuideData = {
  title: string;
  intro: string;
  rules: string;
  points: string;
};

type GuideContextType = {
  guide: GuideData;
  setGuide: (guide: GuideData) => void;
};

const defaultGuide: GuideData = {
  title: "",
  intro: "",
  rules: "",
  points: "",
};

const GuideContext = createContext<GuideContextType | undefined>(undefined);

export function GuideProvider({ children }: { children: ReactNode }) {
  const [guide, setGuide] = useState<GuideData>(defaultGuide);

  return (
    <GuideContext.Provider value={{ guide, setGuide }}>
      {children}
    </GuideContext.Provider>
  );
}

export function useGuide() {
  const context = useContext(GuideContext);

  if (!context) {
    throw new Error("useGuide must be used inside GuideProvider");
  }

  return context;
}
