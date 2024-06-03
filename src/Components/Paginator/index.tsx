/* --------------------------------------------- */
/*                  DEPENDENCIES                 */
/* --------------------------------------------- */
// Packages
import { FormEvent, useState } from 'react';

// UI Local Components
import { AccountInfos, PersonalInfos, ContactInfos } from '..';

// Custom Hooks
import useMultiStepForm from '../../Hooks/useMultiStepForm';

// Styles
import './index.css';

/* --------------------------------------------- */
/*                      TYPE                     */
/* --------------------------------------------- */
type FormData = {
  firstName: string,
  lastName: string,
  age: string,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string 
}

/* --------------------------------------------- */
/*                       APP                     */
/* --------------------------------------------- */
function Paginator() {
    // Initial data
    const INITIAL_DATA: FormData = {
      firstName : "",
      lastName : "",
      age : "",
      street : "",
      city : "",
      state : "",
      zip : "",
      email : "",
      password : ""
    }

    // Hooks
    const [data, setData] = useState(INITIAL_DATA);

    // Update fields
    function UpdateFields(fields: Partial<FormData>) {
      setData((prev) => {
        return {...prev, ...fields}
      })
    }

    // Custom Hooks
    const { currentStepIndex, steps, step, isFirstStep, isLastStep, NextStep, PreviousStep } = useMultiStepForm([
      <PersonalInfos {...data} UpdateFields={UpdateFields} />,
      <ContactInfos {...data} UpdateFields={UpdateFields} />,
      <AccountInfos {...data} UpdateFields={UpdateFields} />
    ]);

    // On submit
    function onSubmit(event: FormEvent) {
      event.preventDefault();
      if (!isLastStep) return NextStep();
      alert("Your account is created successfully");
    }

    /* *************** RENDERING ***************** */
    return (
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className='paginator'>{currentStepIndex + 1} / {steps.length}</div>
          {step}
          <div className='buttons'>
            {!isFirstStep ? <button type="button" onClick={PreviousStep}>Back</button> : ""}
            <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
          </div>
        </form>
      </div>
    )
}
  
export default Paginator;