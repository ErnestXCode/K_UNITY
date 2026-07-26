import DynamicForm from "../../Components/DynamicForm";
import FormLayout from "../../Components/FormLayout";
import loanApplicationFields from "../../Data/formDefinitions/loanApplication";

function LoanApplication() {
    return (
        <FormLayout title="Loan Application">

            <DynamicForm
                fields={loanApplicationFields}
            />

        </FormLayout>
    );
}

export default LoanApplication;