import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../libs/axios"
import { CustomLoadingFeedback, ResultsContainer } from "./styles"

export function Results() {
  const [data, setData] = useState<any>()
  
  const redirect = useNavigate()

  useEffect(() => {
    const awaitDataInterval = setInterval(async () => {
      const data = await api.get('data')

      if(data.data.state === "read") {
        clearInterval(awaitDataInterval)

        setData(data.data)
      }
    }, 500)
  }, [])

  useEffect(() => {
    console.log(data)

    if(data?.state) {
      switch(data.fruit) {
        case 'UV': {
          redirect('grape')
        }
        
        case 'B': {
          redirect('banana')
        }

        case 'A': {
          redirect('plum')
        }
      }
    }
  }, [data])

  return (  
    <ResultsContainer>
      <h1>Analisando</h1>

      <CustomLoadingFeedback weight="bold" />
    </ResultsContainer> 
  )
}