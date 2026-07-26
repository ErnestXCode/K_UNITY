import GuarantorForm from "../Pages/forms/GuarantorForm";
import LoanApplication from "../Pages/forms/LoanApplication";
import MembershipApplication from "../Pages/forms/MembershipApplication";
import WithdrawalForm from "../Pages/forms/WithdrawalForm";

const formRegistry = {
    "loan-application": LoanApplication,
    "membership-application": MembershipApplication,
    "withdrawal-form": WithdrawalForm,
    "guarantor-form": GuarantorForm,
};

export default formRegistry;