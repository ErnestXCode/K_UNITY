import { useState } from "react";
import emailjs from "@emailjs/browser";

function Feedback() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      alert("Feedback sent successfully!");

      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send feedback.");
    }
  };
  return (
    <section className="mx-auto max-w-3xl">
      <h1 className="mb-3 text-4xl font-bold">Feedback & Issues</h1>

      <p className="mb-8 text-slate-600">
        Tell us about any issues you've encountered or share your feedback.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-xl bg-white p-8 shadow"
      >
        <div>
          <label className="mb-2 block font-medium">Full Name</label>

          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Phone Number</label>

          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Email</label>

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Message</label>

          <textarea
            name="message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
            required
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Send Feedback
        </button>
      </form>
    </section>
  );
}

export default Feedback;
