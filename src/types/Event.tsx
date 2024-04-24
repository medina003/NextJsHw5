export enum EventType {
    'holiday',
    'charity',
    'networking'
}


export interface Event
{
    id: number
    title: string
    description: string
    type: EventType
}