"use client";

import { useState, useRef } from "react";
import { FiPaperclip, FiArrowUpRight } from "react-icons/fi";
import { FormEndSection } from "./form-end";

const ContactForm = () => {
  const [sending, setSending] = useState(false);
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState(null);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const fileInputRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    setSending(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    try {
      // 🔧 CHANGE: обычный fetch без throw
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      // 🔧 CHANGE: логируем для 100% уверенности
      console.log("CONTACT FORM RESPONSE:", res.status, res.ok);

      // 🔧 CHANGE: успех — ТОЛЬКО по res.ok
      if (res.ok) {
        setStatus("success");

        e.currentTarget.reset();
        setFileName("");

        // 🔧 CHANGE: открываем success modal
        setIsSuccessOpen(true);
      } else {
        // 🔧 CHANGE: ошибка ТОЛЬКО если реально не ok
        setStatus("error");
      }
    } catch (err) {
      // 🔧 CHANGE: catch — только для сетевых ошибок
      console.error("CONTACT FORM ERROR:", err);
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* 🔧 CHANGE: success modal */}
      {isSuccessOpen && <FormEndSection setIsOpenSuccessModal={setIsSuccessOpen} />}

      <form
        onSubmit={handleSubmit}
        className="xl:w-[372px] w-[337px] flex flex-col gap-4 xl:mr-auto xl:relative"
      >
        <input
          name="fullName"
          placeholder="Full Name"
          className="w-full h-[33px] xl:h-[50px] border border-[#B7B0A6] bg-transparent px-4 placeholder:text-[#9B948A]"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full h-[33px] xl:h-[50px] border border-[#B7B0A6] bg-transparent px-4 placeholder:text-[#9B948A]"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="w-full h-[33px] xl:h-[50px] border border-[#B7B0A6] bg-transparent px-4 placeholder:text-[#9B948A]"
        />

        <div className="relative">
          <textarea
            name="message"
            placeholder="Describe Your Project"
            className="w-full h-[128px] xl:h-[140px] border border-[#B7B0A6] bg-transparent px-4 resize-y placeholder:text-[#9B948A]"
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-3 right-4 text-[#B7B0A6]"
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

        {fileName && <div className="text-sm text-[#ffffff59]">Attached: {fileName}</div>}

        {/* 🔧 CHANGE: ошибка показывается ТОЛЬКО при реальном fail */}
        {status === "error" && (
          <div className="text-red-500 border border-red-500 p-2 text-sm">
            Something went wrong. Try again.
          </div>
        )}

        <button
          type="submit"
          disabled={sending}
          className="flex items-center justify-between bg-[#A89F94] hover:bg-[#9A9186] text-white py-5 px-6 disabled:opacity-70"
        >
          <span>{sending ? "Sending..." : "Send"}</span>
          <FiArrowUpRight size={22} />
        </button>
      </form>
    </>
  );
};

export { ContactForm };
