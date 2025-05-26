export default function InputField({ label, id, value, onChange }) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="number"
        value={value}
        onChange={(event) => onChange(id, event.target.value)}
        required
      />
    </p>
  );
}