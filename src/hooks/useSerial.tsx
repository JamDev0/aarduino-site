import { createContext, ReactNode, useContext, useState } from "react";

interface seriaValue {
  writer: WritableStreamDefaultWriter | undefined
  reader: ReadableStreamDefaultReader | undefined
  setWriter: (arg: WritableStreamDefaultWriter) => void
  setReader: (arg: ReadableStreamDefaultReader) => void
}

const serialContext = createContext<seriaValue>({} as seriaValue)

interface SerialProviderProps {
  children: ReactNode
}

export function SerialProvider({ children }: SerialProviderProps) {
  const [writer, setWriter] = useState<WritableStreamDefaultWriter>()

  const [reader, setReader] = useState<ReadableStreamDefaultReader>()

  return <serialContext.Provider value={{ reader, setReader, setWriter, writer }}>{children}</serialContext.Provider>
}

export function useSerial() {
  const context = useContext(serialContext)

  return context
}