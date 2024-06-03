/* --------------------------------------------- */
/*                  DEPENDENCIES                 */
/* --------------------------------------------- */
// Packages

// UI Local Components
import { FormWrapper } from '..';

// Styles
import './index.css';

/* --------------------------------------------- */
/*                      TYPE                     */
/* --------------------------------------------- */
type UserData = {
    firstName: string,
    lastName: string,
    age: string
};

type UserFormProps = UserData & {
    UpdateFields: (fields: Partial<UserData>) => void
};

/* --------------------------------------------- */
/*                       APP                     */
/* --------------------------------------------- */
function PersonalInfos({ firstName, lastName, age, UpdateFields }: UserFormProps) {
    /* *************** RENDERING *************** */
    return (
      <FormWrapper title="Personal Details">
        <div className="form-group">
            <label>
                First Name
                <input 
                    autoFocus
                    required 
                    type="text" 
                    value={firstName} 
                    placeholder='first name' 
                    onChange={(event) => UpdateFields({ firstName: event.target.value })} 
                />
            </label>
        </div>
        <div className="form-group">
            <label>
                Last Name
                <input 
                    required 
                    type="text" 
                    value={lastName} 
                    placeholder='last name'    
                    onChange={(event) => UpdateFields({ lastName: event.target.value })}  
                />
            </label>
        </div>
        <div className="form-group">
            <label>
                Age
                <input 
                    required 
                    min={1} 
                    type="nnumber" 
                    value={age} 
                    placeholder="age"
                    onChange={(event) => UpdateFields({ age: event.target.value })} 
                />
            </label>
        </div>
      </FormWrapper>
    )
}
  
export default PersonalInfos;