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
type AccountData = {
    email: string,
    password: string
};

type AccountFormProps = AccountData & {
    UpdateFields: (fields: Partial<AccountData>) => void
};

/* --------------------------------------------- */
/*                       APP                     */
/* --------------------------------------------- */
function AccountInfos({ email, password, UpdateFields }: AccountFormProps) {
    /* *************** RENDERING *************** */
    return (
      <FormWrapper title="Account Details">
        <div className="form-group">
            <label>
                Email
                <input 
                    autoFocus 
                    required 
                    type="text" 
                    value={email}
                    placeholder='email'
                    onChange={(event) => UpdateFields({ email: event.target.value })} 
                />
            </label>
        </div>
        <div className="form-group">
            <label>
                Password
                <input 
                    required 
                    type="password" 
                    value={password}
                    placeholder='password'
                    onChange={(event) => UpdateFields({ password: event.target.value })} 
                />
            </label>
        </div>
      </FormWrapper>
    )
}
  
export default AccountInfos;