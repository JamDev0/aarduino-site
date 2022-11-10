import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSerial } from "../../../hooks/useSerial";
import { api } from "../../../libs/axios";
import { CustomLoadingFeedback, HomeAnalyzingContainer } from "./styles";

export function HomeAnalyzing() {
  const [dataReded, setDataReded] = useState<string>('')

  const [isPached, setIsPached] = useState<boolean>(false)

  const { reader } = useSerial()

  const decoder = new TextDecoder()

  const redirect = useNavigate()

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


  async function waitForResponse() {
      setInterval(() => {
        read().then(res => setDataReded(state => state = state + res))
    }, 100)
  }
  
  useEffect(() => {
    console.log(dataReded)
    
    if(dataReded == "UV") {
      api.patch('data', {
        state: 'read',
        fruit: 'UV'
      }).then(() => setIsPached(true))
    } else {
      if(dataReded == "B") {
        api.patch('data', {
          state: 'read',
          fruit: 'B'
        }).then(() => setIsPached(true))
      } else {
        if(dataReded == "A") {
          api.patch('data', {
            state: 'read',
            fruit: 'A'
          }).then(() => setIsPached(true))
        }
      }
    }
    }, [dataReded])
    
    useEffect(() => {
      waitForResponse()
    }, [])
    
    useEffect(()  => {
      if(isPached) {
        redirect('../done')
      }
  }, [isPached])

  return (
    <HomeAnalyzingContainer>
      <h1>Analisando</h1>

      <CustomLoadingFeedback weight="bold" />
    </HomeAnalyzingContainer>
  )
}