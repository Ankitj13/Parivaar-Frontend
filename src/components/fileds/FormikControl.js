import { TextField } from "./TextField";
import { SelectionFiels } from "./SelectionFiels";

function FormikControl (props) {
    const {control, ...rest } = props
    switch (control) {
        case 'input':
            return<TextField {...rest} />
        case 'select':
            return<SelectionFiels {...rest} />
        default:
            return null
    }
}
export default FormikControl;