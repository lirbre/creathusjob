export interface InfoProps {
    track: string
    title: string
    startTime: Date
    endTime: Date
    events: EventsProp[]
    speakers: string[]
    campus: string
}

interface EventsProp {
    title: string
    startTime: Date
    endTime: Date
    certification?: Boolean
}