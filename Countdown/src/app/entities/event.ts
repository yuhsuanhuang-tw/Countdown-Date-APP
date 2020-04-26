export class Event {
    id: number; //Sequence number
    title: string; //Event title
    note: string; //Event note
    startDate: string; //Start date
    eventEnd: number; //Determine event is end or not end
    endDate: string; //End date
    top: number; //Put this event to the top
    orders: number; //Event sort order
    counts: number; //Countdown days or finished days
}
