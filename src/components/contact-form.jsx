"use client";
import { useState, useRef } from "react";
import { FiPaperclip, FiArrowUpRight } from "react-icons/fi";

const ContactForm = () => {
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
      className="max-w-[372px] flex flex-col gap-4 mb-[60px] md:mb-0 xl:mt-[200px] xl:mr-auto xl:relative xl:left-[-80px]"
    >
      <input
        name="fullName"
        placeholder="Full Name"
        className="w-full h-[33px] md:h-[50px] border border-[#938C82] bg-transparent px-3 py-1 text-sm placeholder:text-[#ffffff59] focus:outline-none"
      />

      <input
        name="phone"
        placeholder="Phone Number"
        className="w-full h-[33px] md:h-[50px] border border-[#938C82] bg-transparent px-3 py-1 text-sm placeholder:text-[#ffffff59] focus:outline-none"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full h-[33px] md:h-[50px] border border-[#938C82] bg-transparent px-3 py-1 text-sm placeholder:text-[#ffffff59] focus:outline-none"
      />

      <div className="relative h-[128px] md:h-[140px]">
        <textarea
          name="message"
          placeholder="Describe Your Project"
          className="absolute inset-0 w-full h-full box-border border border-[#938C82] bg-transparent px-3 py-2 resize-y placeholder:text-[#ffffff59] placeholder:text-lg focus:outline-none"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="absolute bottom-3 right-4 text-[#938C82] hover:opacity-80"
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

      {/* BUTTON: small screens fixed 336x34 with 16px gap from textarea (gap-4 already), inner paddings 8px; large screens preserved */}
      <button
        type="submit"
        disabled={sending}
        className={
          "flex items-center justify-between " +
          /* small screen styles */
          "w-[336px] h-[34px] bg-[#A89F94] text-[#DFE0DB] font-inter font-normal text-[16px] leading-[100%] tracking-[-0.02em] px-2 " +
          /* preserve large screen look */
          "md:py-5 md:px-6 md:text-[20px] md:h-auto md:w-auto transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        }
        style={{ lineHeight: "100%" }}
      >
        <span className="block" style={{ lineHeight: "100%" }}>
          {sending ? "Sending..." : "Send"}
        </span>
        <FiArrowUpRight size={22} />
      </button>
    </form>
  );
};

export { ContactForm };
