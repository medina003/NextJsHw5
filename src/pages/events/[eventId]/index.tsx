import { inter } from "@/fonts";
import { Event } from "@/types/Event";

interface Props {
  event: Event;
}

function EventComponent({ event }: Props) {
  return (
    <div className={inter.className}>
      <p>Id: {event.id}</p>
      <p>Title: {event.title}</p>
      <p>Description: {event.description}</p>
      <p>Type: {event.type}</p>
    </div>
  );
}

export async function getServerSideProps({ params }: any) {
  const { eventId } = params;
  const response = await fetch(`http://localhost:3000/events/${eventId}`);
  const event = await response.json();
  return {
    props: {
      event: event,
    },
  };
}

export default EventComponent;
