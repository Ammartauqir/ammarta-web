import React, { createContext, useCallback, useContext, useState } from "react";

const AssistantContext = createContext(null);
export function AssistantProvider({ children }) {
  const [state, setState] = useState({ open: false, projectId: null });
  const openAssistant = useCallback(
    (projectId = null) => setState({ open: true, projectId }),
    [],
  );
  const closeAssistant = useCallback(
    () => setState((s) => ({ ...s, open: false })),
    [],
  );
  return (
    <AssistantContext.Provider
      value={{ ...state, openAssistant, closeAssistant }}
    >
      {children}
    </AssistantContext.Provider>
  );
}
export const useAssistant = () => useContext(AssistantContext);
