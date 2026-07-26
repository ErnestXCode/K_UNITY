import { useState } from "react";
import emailjs from "@emailjs/browser";
import { User, Phone, Mail, MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";

function Feedback() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const fields = [
    { name: "name", label: "Full name", type: "text", icon: User, placeholder: "Jane Doe" },
    { name: "phone", label: "Phone number", type: "tel", icon: Phone, placeholder: "07XX XXX XXX" },
    { name: "email", label: "Email", type: "email", icon: Mail, placeholder: "jane@example.com" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 px-4 py-10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:px-6 sm:py-16">
      <section className="mx-auto w-full max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-10 sm:text-left">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-200 dark:bg-blue-500 dark:shadow-none sm:mx-0">
            <MessageSquare size={22} strokeWidth={2} />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Feedback & issues
          </h1>
          <p className="mt-2 text-base text-slate-500 dark:text-slate-400 sm:text-lg">
            Tell us about any issues you've encountered or share your feedback.
          </p>
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-100/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none sm:space-y-6 sm:rounded-3xl sm:p-8"
        >
          {fields.map(({ name, label, type, icon: Icon, placeholder }) => (
            <div key={name}>
              <label
                htmlFor={name}
                className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                {label}
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 dark:text-slate-500">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <input
                  id={name}
                  name={name}
                  type={type}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  autoComplete="on"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/60 py-3 pl-10 pr-3.5 text-[16px] text-slate-900 placeholder:text-slate-400 transition-colors duration-150 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:bg-slate-800 dark:focus:ring-blue-900/40"
                  required
                />
              </div>
            </div>
          ))}

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Describe what happened or what you'd like to share..."
              className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/60 p-3.5 text-[16px] text-slate-900 placeholder:text-slate-400 transition-colors duration-150 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:bg-slate-800 dark:focus:ring-blue-900/40"
              required
            />
          </div>

          {/* Status banner */}
          {status === "success" && (
            <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
              <CheckCircle2 size={18} />
              Feedback sent successfully.
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-400">
              <AlertCircle size={18} />
              Something went wrong. Please try again.
            </div>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-150 hover:bg-blue-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-blue-500 dark:shadow-none dark:hover:bg-blue-600 sm:w-auto"
          >
            {status === "sending" ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                Sending...
              </>
            ) : (
              <>
                <Send size={17} />
                Send feedback
              </>
            )}
          </button>
        </form>
      </section>
    </div>
  );
}

export default Feedback;
