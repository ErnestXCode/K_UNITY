import { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function FormLayout({ title, children }) {
  const formRef = useRef(null);

  const handleDownload = async () => {
    const canvas = await html2canvas(formRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    pdf.save(`${title}.pdf`);
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">

      <div className="mb-6 flex justify-end">
        <button
          onClick={handleDownload}
          className="rounded-lg bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700"
        >
          Download PDF
        </button>
      </div>

      <div
        ref={formRef}
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8 md:p-10"
      >
        <header className="mb-8 border-b border-slate-200 pb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-800">
            K-Unity SACCO
          </h1>

          <p className="mt-2 text-lg text-slate-500">
            {title}
          </p>
        </header>

        {children}
      </div>

    </section>
  );
}

export default FormLayout;