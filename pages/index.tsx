import { Card , EventCard, Nav } from '@/components'
import { InfoProps } from '@/helpers/types'
import { useTheme } from 'next-themes'
import { useCallback, useEffect, useState } from 'react'

const Home = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [info, setInfo] = useState<InfoProps[]>([])
  const [maxCards, setMaxCards] = useState<number>(4)

  const getInformation = () => {
    useCallback(() => {
      fetch(
        'https://gist.githubusercontent.com/creathusjobs/3c53322e8dc8c3b524cfb2623c097cc5/raw/adc988f34c4fb1a0fe12035b4b030259776115ea/response.json'
      ).then((r) => r.json())
      .then((r) => {
        setInfo([...r])
        console.log(r)

        return r
      })
    }, [])
  }

  useEffect(() => {
    getInformation()
  }, [])

  return (
    <div>
      <Nav/>
      <div className='max-w-7xl mx-auto pt-8 mt-20'>
        <h3 className='px-8 sm:text-left text-center'>Cursos</h3>
        <div className="container lg:mt-10 text-center max-w-7xl grid lg:grid-cols-4 md:grid-cols-3 lg:gap-8 sm:gap-4 gap-2 transition-all duration-500">
          {info.map((info, i: number) => 
            i < maxCards ? 
              <div key={i}>
                <EventCard 
                  campus={info.campus}
                  endTime={info.endTime}
                  startTime={info.startTime}
                  events={info.events}
                  speakers={info.speakers}
                  title={info.title}
                  track={info.track}
                  detailsURL={info.detailsURL}
                />
              </div>
            : <></>
          )}
        </div>
        <div onClick={() => {
          maxCards === 4 ? setMaxCards(12) : setMaxCards(4)
        }} 
          className='w-full p-4 mt-12 dark:bg-white/5 bg-black/10 rounded-lg flex items-center justify-center mb-12 cursor-pointer hover:opacity-80 shadow-lg'>
          {maxCards === 4 ? <p>Ver mais</p> : <p>Ver menos</p>}
        </div>
      </div>
    </div>
  )
}

export default Home
