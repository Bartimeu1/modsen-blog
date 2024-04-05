export interface ITagsControls {
  onTagButtonClick: (value: string) => () => void;
  targetTags: string[];
}
