import { useParams } from "react-router-dom";

import NotFound from "./NotFound";
import formRegistry from "../Data/formRegistry";

function FormViewer() {
    const { slug } = useParams();

    const FormComponent = formRegistry[slug];

    if (!FormComponent) {
        return <NotFound />;
    }

    return <FormComponent />;
}

export default FormViewer;