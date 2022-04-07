import { Card , EventCard, Nav } from '@/components'
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
      <div className='max-w-7xl mx-auto pt-8'>
        <h3 className='px-8 sm:text-left text-center'>Cursos</h3>
        <div className="container lg:mt-10 text-center max-w-7xl grid lg:grid-cols-4 md:grid-cols-3 lg:gap-8 sm:gap-4 gap-2">
          {info.map((info, i: number) => 
            <div key={i}>
              <EventCard 
                campus={info.campus}
                endTime={info.endTime}
                startTime={info.startTime}
                events={info.events}
                speakers={info.speakers}
                title={info.title}
                track={info.track}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
