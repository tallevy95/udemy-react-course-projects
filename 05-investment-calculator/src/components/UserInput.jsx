import InputField from './InputField';

const INPUT_GROUPS = [
  [
    { label: "Initial Investment", id: "initialInvestment" },
    { label: "Annual Investment", id: "annualInvestment" }
  ],
  [
    { label: "Expected Return", id: "expectedReturn" },
    { label: "Duration", id: "duration" }
  ]
];

export default function UserInput({onChange, userInput}) {
  return (
    <section className="user-input">
        {INPUT_GROUPS.map((fieldGroup, groupIndex) => (
            <div key={groupIndex} className='input-group'>
                {fieldGroup.map(field => (
                    <InputField 
                    key={field.id}
                    label={field.label}
                    id={field.id}
                    value={userInput[field.id]}
                    onChange={onChange}
                    />
                ))}
            </div>
        ))}
    </section>
  );
}
