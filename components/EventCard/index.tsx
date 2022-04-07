import { ReactNode, useMemo } from "react"
import { InfoProps } from "@/helpers/types"
import { AiFillAndroid } from 'react-icons/ai'
import { BsBook, BsPersonFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'

const EventCard = ({ ...props }: InfoProps) => {
    const renderSpeakers = useMemo(() => {
        return props.speakers.map((speaker) => <small className="text-sm">{speaker}<br/></small>)
    }, [props])

    return (
        <div className={`bg-primary p-4 rounded-xl shadow-md sm:w-full w-4/5 mx-auto`}>
            <div className="flex py-1 justify-between">
                <small className="italic">Trilha {props.track}</small>
                <small><AiFillAndroid/></small>
            </div>
            <p className="text-left mb-3">{props.title}</p>
            <div>
            </div>
            <div className="flex items-center gap-3 border-t dark:border-white/10 border-black/20 py-3">
                <BsBook/> {props.events.length} Aulas
            </div>
            <div className="flex border-t dark:border-white/10 border-black/20 py-3">
                <div className="w-3/4 flex items-center justify-start gap-2">
                    <BsPersonFill/>
                    <div className="flex flex-col items-start">{renderSpeakers}</div>
                </div>
                <div className="w-1/5 h-full flex flex-col items-center justify-center gap-2 py-2">
                    <div><FaMapMarkerAlt/></div>
                    <small>{props.campus.split('de')[1]}</small>
                </div>
            </div>
            <button className="p-3 bg-orange-500 dark:bg-orange-400 w-10/12 rounded-xl ripple mt-4">
                <small className="text-white dark:text-gray-50 font-black">Página do Curso</small>
            </button>
        </div>
    )
}

export default EventCard
