"use client";
import { useState, useRef } from "react";
import { FiPaperclip, FiArrowUpRight } from "react-icons/fi";

const QuestionaryForm = () => {
  const [sending, setSending] = useState(false);
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const fileInputRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);
    const form = new FormData(e.currentTarget);
    try {
      setSending(true);
      // TODO: замени на свой endpoint
      const res = await fetch("/api/contact", { method: "POST", body: form });
      if (!res.ok) throw new Error("Ошибка");
      setStatus("success");
      e.currentTarget.reset();
      setFileName("");
    } catch (err) {
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="xl:w-[372px] w-[337px] flex flex-col gap-4 xl:mr-auto xl:relative"
    >
      <input
        name="fullName"
        placeholder="Full Name"
        className="w-full h-[33px] xl:h-[50px] border border-[#B7B0A6] bg-transparent px-4 placeholder:text-[#9B948A] placeholder:text-lg focus:outline-none"
      />

      <input
        name="phone"
        placeholder="Phone Number"
        className="w-full h-[33px] xl:h-[50px] border border-[#B7B0A6] bg-transparent px-4 placeholder:text-[#9B948A] placeholder:text-lg focus:outline-none"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full h-[33px] xl:h-[50px] border border-[#B7B0A6] bg-transparent px-4 placeholder:text-[#9B948A] placeholder:text-lg focus:outline-none"
      />

      <input
        name="projectAddress"
        placeholder="Project Address"
        className="w-full h-[33px] xl:h-[50px] border border-[#B7B0A6] bg-transparent px-4 placeholder:text-[#9B948A] placeholder:text-lg focus:outline-none"
      />

      <div className="relative">
        <textarea
          name="message"
          placeholder="Describe Your Project"
          className="w-full h-[128px] xl:h-[140px] border border-[#B7B0A6] bg-transparent px-4 resize-y placeholder:text-[#9B948A] placeholder:text-lg focus:outline-none"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="absolute bottom-3 right-4 text-[#B7B0A6] hover:opacity-80"
        >
          <FiPaperclip size={18} />
        </button>
        <input
          type="file"
          name="attachment"
          ref={fileInputRef}
          className="hidden"
          onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
        />
      </div>

      {fileName && <div className="text-sm text-[#ffffff59] pl-1">Attached: {fileName}</div>}

      {status === "success" && (
        <div className="text-green-500 border border-green-500 p-2 text-sm">
          Message sent successfully!
        </div>
      )}
      {status === "error" && (
        <div className="text-red-500 border border-red-500 p-2 text-sm">
          Something went wrong. Try again.
        </div>
      )}

      <button
        type="submit"
        disabled={sending}
        className="flex items-center justify-between h-[34px] md:max-h-[45px] bg-[#A89F94] hover:bg-[#9A9186] text-white text-xl md:text-2xl px-[8px] py-[11px] md:py-5 md:px-6 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span className="font-inter font-normal text-[16px] leading-[100%] tracking-[-0.02em]">
          {sending ? "Sending..." : "Request My Free Measurement"}
        </span>
        <FiArrowUpRight size={22} />
      </button>
    </form>
  );
};

export { QuestionaryForm };
