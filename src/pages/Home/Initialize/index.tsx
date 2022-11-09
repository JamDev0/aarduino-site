import { useEffect, useState } from "react";
import { useSerial } from "../../../hooks/useSerial";

import { ConnectButton, HomeStartContainer, StartButton } from "./styles";

export function HomeInitialize() {
  const [isInitialized, setIsInitialized] = useState(false)

  const [dataReded, setDataReded] = useState<string>('')

  const { setReader, setWriter, reader } = useSerial()

  const decoder = new TextDecoder()

  async function init() {
    if('serial' in navigator) {
      try {
        // @ts-ignore
        const port = await navigator.serial.requestPort();
        await port.open({ baudRate: 9600 });


        setWriter(port.writable.getWriter())
        setReader(port.readable.getReader());

        const signals = await port.getSignals();
        console.log(signals);

        return true
      } catch(err) {
        console.error('There was an error opening the serial port:', err);

        return false
      }
    } else {
      console.error('Sem porta serial')
    }
  }


  async function read() {
    try {
      const readerData = await reader!.read();
      return decoder.decode(readerData.value);
    } catch (err) {
      const errorMessage = `error reading data: ${err}`;
      console.error(errorMessage);
      return errorMessage;
    }
  }

  async function handleConnectBtnClick() {
    const initialized = await init()

    if(initialized) {
      setIsInitialized(true)
    }
  }

  return (
    <HomeStartContainer>
      <ConnectButton onClick={() => handleConnectBtnClick()}>Conectar</ConnectButton>
      <StartButton disabled={!isInitialized}>Iniciar leitura</StartButton>
    </HomeStartContainer>
  )
}