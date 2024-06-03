/* --------------------------------------------- */
/*                  DEPENDENCIES                 */
/* --------------------------------------------- */
// Packages
import { ReactNode } from 'react';

// Styles
import './index.css';

/* --------------------------------------------- */
/*                       APP                     */
/* --------------------------------------------- */
type FormWrapperProps = {
    title: string,
    children: ReactNode
};

function FormWrapper({ title, children }: FormWrapperProps) {
    /* *************** RENDERING ***************** */
    return (
      <div className="form_wrapper">
        <div className='text-center'><h2>{title}</h2></div>
        <div className="form">{children}</div>
      </div>
    )
}
  
export default FormWrapper;