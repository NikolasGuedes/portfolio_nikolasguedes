import { createContext, useContext, useState, ReactNode } from "react";
import { CustomCursor } from "@/components/ui/custom-cursor";

// Definição do tipo do contexto
type CursorVariant = "default" | "sm";

type CursorContextType = {
  cursorVariant: CursorVariant;
  setCursorVariant: (variant: CursorVariant) => void;
};

// Criando o contexto com um valor inicial
const CursorContext = createContext<CursorContextType | undefined>(undefined);

// Componente Provider
export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");

  return (
    <CursorContext.Provider value={{ cursorVariant, setCursorVariant }}>
      <CustomCursor variant={cursorVariant} />
      {children}
    </CursorContext.Provider>
  );
}

// Hook para usar o contexto
export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor deve ser usado dentro de um CursorProvider");
  }
  return context;
}
