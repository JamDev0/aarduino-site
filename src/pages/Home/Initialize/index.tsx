import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSerial } from "../../../hooks/useSerial";

import { ConnectButton, HomeStartContainer, StartButton } from "./styles";

export function HomeInitialize() {
  const [isInitialized, setIsInitialized] = useState(false)

  const [isStarted, setIsStarted] = useState(false)

  const { setReader, setWriter, writer } = useSerial()

  const redirect = useNavigate()

  const encoder = new TextEncoder()

  // const redirect = useNavigate()

  
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
  
  async function write(data: string): Promise<void> {
    const dataArrayBuffer = encoder.encode(data);
    await writer!.write(dataArrayBuffer);
  }

  async function handleConnectBtnClick() {
    const initialized = await init()

    if(initialized) {
      setIsInitialized(true)
    }
  }

  async function handleStartBtnClick() {
    //@ts-ignore
    await write(1)

    redirect('analyzing')
  }

  return (
    <HomeStartContainer>
      <ConnectButton onClick={() => handleConnectBtnClick()}>Conectar</ConnectButton>
      <StartButton disabled={!isInitialized} onClick={() => handleStartBtnClick()}>Iniciar leitura</StartButton>
    </HomeStartContainer>
  )
}