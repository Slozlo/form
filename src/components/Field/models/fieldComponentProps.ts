import { FormEvent } from "react";

export interface FieldComponentProps {
  value: string;
  onChange: (event: FormEvent) => void;
  label: string;
  name: string;
}
