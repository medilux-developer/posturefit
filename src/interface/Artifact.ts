type Size = "M" | "XL";
export interface Artifact {
  name: string;
  link: string;
  method: string;
  isValid: boolean;
  sizes?: Size[];
}
