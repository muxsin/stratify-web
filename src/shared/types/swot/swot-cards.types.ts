export interface SwotCard {
  key: "S" | "W" | "O" | "T";
  name: string;
  description: string;
  tooltip: string;
  items: string[];
  input: string;
}
