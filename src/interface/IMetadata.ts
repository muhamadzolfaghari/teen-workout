interface IGender {
  id: number;
  title: string;
}

interface IAgeRange {
  id: number;
  range: string;
}


interface IMetadata {
  genders: IGender[];
  age_ranges: IAgeRange[];
}

export default IMetadata;
