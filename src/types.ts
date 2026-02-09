
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