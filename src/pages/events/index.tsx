import Link from "next/link";
import { inter } from "@/fonts";
import { Event } from "@/types/Event";
import { useRouter } from "next/router";
import { useState } from "react";

interface Props {
  events: Event[];
}

function Events({ events }: Props) {
  const [eventsData, setEventsData] = useState<Event[]>(events);
  const router = useRouter();
  const fetchAll = async () => {
    const response = await fetch("http://localhost:3000/events");
    const events = await response.json();
    setEventsData(events);
  };

  const fetchHolidayEvents = async () => {
    const response = await fetch("http://localhost:3000/events?type=holiday");
    const events = await response.json();
    setEventsData(events);
    router.push("/events?type=holiday", undefined, { shallow: true });
  };
  const fetchNetworkingEvents = async () => {
    const response = await fetch(
      "http://localhost:3000/events?type=networking"
    );
    const events = await response.json();
    setEventsData(events);
    router.push("/events?type=networking", undefined, { shallow: true });
  };

  const fetchCharityEvents = async () => {
    const response = await fetch("http://localhost:3000/events?type=charity");
    const events = await response.json();
    setEventsData(events);
    router.push("/events?type=charity", undefined, { shallow: true });
  };

  return (
    <div>
      <div>
        <button onClick={fetchAll}>Show All</button>
        <button onClick={fetchHolidayEvents}>Holiday events</button>
        <button onClick={fetchCharityEvents}>Charity events</button>
        <button onClick={fetchNetworkingEvents}>Networking events</button>
      </div>
      {eventsData.map((event) => (
        <div key={event.id} className={inter.className}>
          <Link href={`/events/${event.id}`}>{event.title}</Link>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps({ query }: any) {
  const { type } = query;
  const response = await fetch(
    type
      ? `http://localhost:3000/events?type=${type}`
      : "http://localhost:3000/events"
  );
  const events = await response.json();

  return {
    props: {
      events: events,
    },
  };
}

export default Events;
