import { Card , Nav } from '@/components'
import { InfoProps } from '@/helpers/types'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const Home = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [info, setInfo] = useState<InfoProps[]>([])

  const getInformation = () => {
    fetch(
      'https://gist.githubusercontent.com/creathusjobs/3c53322e8dc8c3b524cfb2623c097cc5/raw/adc988f34c4fb1a0fe12035b4b030259776115ea/response.json'
    ).then((r) => r.json())
    .then((r) => {
      setInfo([...r])
      console.log(r)
    })
  }

  useEffect(() => {
    getInformation()
  }, [])

  return (
    <div>
      <Nav/>
      <div className="container mt-10 text-center max-w-[90ch]">
        {info.map((info, i: number) => <div key={i}>i</div>)}
      </div>
    </div>
  )
}

export default Home
