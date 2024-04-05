import { ITagItem } from '@root/types/api';

export interface ITagSearchProps {
  tags: ITagItem[];
  value: string;
  onSearch: () => void;
  onChange: (value: string) => void;
}
