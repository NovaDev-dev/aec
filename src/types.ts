
export type SombreroPatternProps = {
  isInverted?: boolean; // optional, defaults to false
};

export type PatternItem =
  | { type: "bar"; width: string; opacity: number }
  | { type: "triple" }
  | { type: "pinta" }
  | { type: "triangles" };


export type GenreProps = {
    name: string;
    shortDescription: string;
    longDescription: string;
    image: string;
}

export type EventProps = {
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string;
  instagramUrl?: string;
  poster?: string;
}

export type EventCardProps = {
  event: EventProps | null ;
  onClose: () => void;
}

export type CalendarProps = {
  onEventClicked: (props: EventProps) => void;

}