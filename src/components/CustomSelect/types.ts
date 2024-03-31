export interface ICustomSelectProps {
  options: { id: number; value: string }[];
  onSelect: (value: string) => void;
}
