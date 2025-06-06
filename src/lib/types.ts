export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  start_time: string;
  end_time: string;
  location: string;
  slug: string;
  graphic: string | null;
  capacity: number | null;
  is_featured: boolean;
  registration_link: string | null;
  created_at: string;
  updated_at: string;
}

export interface RSVP {
  id: number;
  name: string;
  email: string;
  event: number;
  notes: string;
  submitted_at: string;
} 