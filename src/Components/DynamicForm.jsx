function DynamicForm({ fields }) {
  return (
    <div className="space-y-6">
      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            {field.label}
          </label>

          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              rows={field.rows || 4}
              placeholder={field.placeholder}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 md:text-base"
            />
          ) : (
            <input
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 md:text-base"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default DynamicForm;