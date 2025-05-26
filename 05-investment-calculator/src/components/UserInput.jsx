import InputField from './InputField';

const INPUT_GROUPS = [
  [
    { label: "Initial Investment", fieldName: "initialInvestment" },
    { label: "Annual Investment", fieldName: "annualInvestment" }
  ],
  [
    { label: "Expected Return", fieldName: "expectedReturn" },
    { label: "Duration", fieldName: "duration" }
  ]
];

export default function UserInput({onChange, userInput}) {
  return (
    <section className="user-input">
        {INPUT_GROUPS.map((fieldGroup, groupIndex) => (
            <div key={groupIndex} className='input-group'>
                {fieldGroup.map(field => (
                    <InputField 
                    key={field.fieldName}
                    label={field.label}
                    fieldName={field.fieldName}
                    value={userInput[field.fieldName]}
                    onChange={onChange}
                    />
                ))}
            </div>
        ))}
    </section>
  );
}
