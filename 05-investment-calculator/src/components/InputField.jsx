import { useId } from "react";

export default function InputField({ label, fieldName, value, onChange }) {
  const id = useId();
  const inputId = `${fieldName}-${id}`;

  return (
    <p>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        type="number"
        value={value}
        onChange={(event) => onChange(fieldName, event.target.value)}
        required
      />
    </p>
  );
}
