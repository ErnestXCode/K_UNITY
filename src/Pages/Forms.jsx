import FormCard from "../Components/FormCard";
import forms from "../Data/forms";


function Forms() {
    return (
        <section>
            <h1 className="mb-8 text-4xl font-bold">
                Forms
            </h1>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {forms.map((form) => (
                    <FormCard
                        key={form.id}
                        {...form}
                    />
                ))}
            </div>
        </section>
    );
}

export default Forms;