import { getAllEvents } from "@/lib/sanity/queries";
import EventsPageClient from "./EventsPageClient";

export default async function EventsPage() {
  // Fetch events from Sanity
  const events = await getAllEvents();
  console.log("Fetched events:", events);
  

  return <EventsPageClient initialEvents={events || []} />;
}