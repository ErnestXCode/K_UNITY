import FormCard from "../Components/FormCard";
import forms from "../Data/forms";
import { LayoutGrid } from "lucide-react";

function Forms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 px-4 py-10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:px-6 sm:py-16">
      <section className="mx-auto w-full max-w-6xl">
        <div className="mb-8 text-center sm:mb-12 sm:text-left">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-200 dark:bg-blue-500 dark:shadow-none sm:mx-0">
            <LayoutGrid size={22} strokeWidth={2} />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Forms
          </h1>
          <p className="mt-2 text-base text-slate-500 dark:text-slate-400 sm:text-lg">
            Pick a form below to get started.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {forms.map((form) => (
            <FormCard key={form.id} {...form} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Forms;
