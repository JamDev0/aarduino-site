import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSerial } from "../../../hooks/useSerial";
import { HomeStartContainer, StartButton } from "./styles";

export function HomeStart() {
  const [isStarted, setIsStarted] = useState(false)

  const { writer } = useSerial()

  const redirect = useNavigate()

  const encoder = new TextEncoder();

  async function write(data: string): Promise<void> {
    const dataArrayBuffer = encoder.encode(data);
    await writer!.write(dataArrayBuffer);
  }

  

  async function handleStartBtnClick() {
    //@ts-ignore
    await write(1)

    setIsStarted(true)
  }

  useEffect(() => {
    if(isStarted) {
      redirect("/analyzing")
    }
  }, [isStarted])

  return (
    <HomeStartContainer>
      <StartButton onClick={() => handleStartBtnClick()}>Iniciar leitura</StartButton>
    </HomeStartContainer>
  )
}