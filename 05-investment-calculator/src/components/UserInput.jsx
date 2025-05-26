import InputField from './InputField';

const INPUT_GROUPS = [
    {
      group: [
        { label: "Initial Investment", id: "initialInvestment" },
        { label: "Annual Investment", id: "annualInvestment" }
      ]
    },
    {
      group: [
        { label: "Expected Return", id: "expectedReturn" },
        { label: "Duration", id: "duration" }
      ]
    }
  ];

export default function UserInput({onChange, userInput}) {
  return (
    <section className="user-input">
        {INPUT_GROUPS.map((group, index) => (
            <div key={index} className='input-group'>
                {group.group.map(field => (
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
