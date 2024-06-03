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
type ContactData = {
    street: string,
    city: string,
    state: string,
    zip: string
};

type ContactFormProps = ContactData & {
    UpdateFields: (fields: Partial<ContactData>) => void
};

/* --------------------------------------------- */
/*                       APP                     */
/* --------------------------------------------- */
function ContactInfos({ street, city, state, zip, UpdateFields }: ContactFormProps) {
    /* *************** RENDERING ***************** */
    return (
      <FormWrapper title="Contact Informations">
        <div className="form-group">
            <label>
                Street
                <input 
                    autoFocus 
                    required 
                    type="text" 
                    value={street}
                    placeholder='street'
                    onChange={(event) => UpdateFields({ street: event.target.value })} 
                />
            </label>
        </div>
        <div className="form-group">
            <label>
                City
                <input 
                    required 
                    type="text" 
                    value={city}
                    placeholder='city'
                    onChange={(event) => UpdateFields({ city: event.target.value })} 
                />
            </label>
        </div>
        <div className="form-group">
            <label>
                State
                <input 
                    required 
                    min={1} 
                    type="nnumber" 
                    value={state}
                    placeholder="state" 
                    onChange={(event) => UpdateFields({ state: event.target.value })} 
                />
            </label>
        </div>
        <div className="form-group">
            <label>
                Zip
                <input 
                    required 
                    min={1} 
                    type="number"
                    value={zip} 
                    placeholder="zip"
                    onChange={(event) => UpdateFields({ zip: event.target.value })} 
                />
            </label>
        </div>
      </FormWrapper>
    )
}
  
export default ContactInfos;