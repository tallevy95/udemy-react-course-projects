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
    <section id="user-input">
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
    // <section id="user-input">
    //   <div className="input-group">
    //     <p>
    //       <label>Initial Investment</label>
    //       <input
    //         type="number"
    //         value={userInput.initialInvestment}
    //         onChange={(event) =>
    //           onChange("initialInvestment", event.target.value)
    //         }
    //         required
    //       />
    //     </p>
    //     <p>
    //       <label>Annual Investment</label>
    //       <input
    //         type="number"
    //         value={userInput.annualInvestment}
    //         onChange={(event) =>
    //           onChange("annualInvestment", event.target.value)
    //         }
    //         required
    //       />
    //     </p>
    //   </div>

    //   <div className="input-group">
    //     <p>
    //       <label>Expecten Return</label>
    //       <input
    //         type="number"
    //         value={userInput.expectedReturn}
    //         onChange={(event) =>
    //           onChange("expectedReturn", event.target.value)
    //         }
    //         required
    //       />
    //     </p>
    //     <p>
    //       <label>Duration</label>
    //       <input
    //         type="number"
    //         value={userInput.duration}
    //         onChange={(event) =>
    //           onChange("duration", event.target.value)
    //         }
    //         required
    //       />
    //     </p>
    //   </div>
    // </section>
  );
}
