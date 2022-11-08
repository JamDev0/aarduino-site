import { useEffect, useState } from "react";
import { useSerial } from "../../../hooks/useSerial";
import { CustomLoadingFeedback, HomeAnalyzingContainer } from "./styles";

export function HomeAnalyzing() {
  const [dataReded, setDataReded] = useState<string>('')

  const { reader } = useSerial()

  const decoder = new TextDecoder()

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

  // async function read() {
  //   try {
  //     const readerData = await reader!.read();
  //     console.log('Opa')
  //     console.log(decoder.decode(readerData.value))
  //     setDataReded(decoder.decode(readerData.value))
  //   } catch (err) {
  //     const errorMessage = `error reading data: ${err}`;
  //     console.error(errorMessage);
  //     return errorMessage;
  //   }

  //   console.log('ASDSAD')
  // }

  async function waitForResponse() {
      const waitInterval = setInterval(() => {
      read().then(res => console.log(res))

      // if(dataReded) {
      //   clearInterval(waitInterval)
      // }
    }, 100)
  }

  useEffect(() => {
    waitForResponse()
  }, [])

  // useEffect(()  => {
  //   console.log(dataReded)
  // }, [dataReded])

  return (
    <HomeAnalyzingContainer>
      <h1>Analisando</h1>

      <CustomLoadingFeedback weight="bold" />

      <button onClick={() => read().then(res => console.log(res))}>aa</button>
    </HomeAnalyzingContainer>
  )
}