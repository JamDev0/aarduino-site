import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSerial } from "../../../hooks/useSerial";

import { HomeStartContainer, StartButton } from "./styles";

export function HomeInitialize() {
  const [isInitialized, setIsInitialized] = useState(false)

  const { setReader, setWriter } = useSerial()

  const redirect = useNavigate()

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
      } catch(err) {
        console.error('There was an error opening the serial port:', err);
      }
    } else {
      console.error('Sem porta serial')
    }
  }

  async function handleStartBtnClick() {
    await init()

    setIsInitialized(true)
  }

  useEffect(() => {
    if(isInitialized) {
      redirect("/Start")
    }
  }, [isInitialized])

  return (
    <HomeStartContainer>
      <StartButton onClick={() => handleStartBtnClick()}>Iniciar conexão</StartButton>
    </HomeStartContainer>
  )
}