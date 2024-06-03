/* ------------------------------------- */
/*             DEPENDENCIES              */
/* ------------------------------------- */
// Packages
import { ReactElement, useState } from 'react';

/* ------------------------------------- */
/*         USE MULTISTEP FORM HOOK       */
/* ------------------------------------- */
function useMultiStepForm(steps: ReactElement[]) {
    // STATES
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    // NEXT STEP
    function NextStep() {
        setCurrentStepIndex((previousIndex) => {
            if (previousIndex >= steps.length -1) return previousIndex;
            return previousIndex + 1;
        })
    }

    // PREVIOUS STEP
    function PreviousStep() {
        setCurrentStepIndex((previousIndex) => {
            if (previousIndex <= 0) return previousIndex;
            return previousIndex - 1;
        })
    }

    // SET STEP INDEX
    function GoTo(index: number) {
        setCurrentStepIndex(index);
    }

    /* *********** RENDERING *********** */
    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1, 
        NextStep,
        PreviousStep,
        GoTo,
        // step is the current step
    }
}

export default useMultiStepForm;