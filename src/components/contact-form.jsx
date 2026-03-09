"use client";

import { useState, useRef } from "react";
import { FiPaperclip } from "react-icons/fi";
import { Arrow } from "@/lib/icons/arrow"; // Импорт вашей иконки

const ContactForm = ({ onSuccess, width }) => {
  const [sending, setSending] = useState(false);
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState(null);
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    setSending(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        setFileName("");
        formRef.current?.reset();
        onSuccess?.();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`xl:w-[372px] ${`w-[${width}]`} flex flex-col gap-4 xl:mr-auto xl:relative`}
      >
        <input
          name="fullName"
          placeholder="Full Name"
          className="w-full h-[33px] xl:h-[50px] border border-[#B7B0A6] bg-transparent px-4 placeholder:text-[#9B948A] text-[#DFE0DB]"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full h-[33px] xl:h-[50px] border border-[#B7B0A6] bg-transparent px-4 placeholder:text-[#9B948A] text-[#DFE0DB]"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="w-full h-[33px] xl:h-[50px] border border-[#B7B0A6] bg-transparent px-4 placeholder:text-[#9B948A] text-[#DFE0DB]"
        />

        <div className="relative">
          <textarea
            name="message"
            placeholder="Describe Your Project"
            className="w-full h-[128px] xl:h-[140px] border border-[#B7B0A6] bg-transparent px-4 pt-2 resize-y placeholder:text-[#9B948A] text-[#DFE0DB]"
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-[20px] right-[12px] text-[#B7B0A6] hover:text-[#DFE0DB] transition-colors"
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

        {status === "error" && (
          <div className="text-red-500 border border-red-500 p-2 text-sm">
            Something went wrong. Try again.
          </div>
        )}

        {/* ОБНОВЛЕННАЯ КНОПКА С АНИМАЦИЕЙ */}
        <button
          type="submit"
          disabled={sending}
          className="group relative overflow-hidden flex items-center justify-between border border-[#A89F94] h-[34px] xl:h-[46px] px-[11px] disabled:opacity-70"
        >
          {/* Контент кнопки */}
          <span className="relative z-20 flex items-center justify-between w-full text-[#DFE0DB] group-hover:text-[rgb(var(--fg))] transition-colors duration-1000">
            <span>{sending ? "Sending..." : "Send"}</span>
            <span className="transition-transform duration-1000 ease-in-out group-hover:rotate-45 origin-center">
              <Arrow />
            </span>
          </span>

          {/* Основной фон (серый) */}
          <div className="absolute inset-0 bg-[#A89F94] z-0" />

          {/* Пустота (круг), расширяющаяся из центра левого края */}
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[rgb(var(--bg))] rounded-full transition-transform duration-1000 ease-in-out scale-0 group-hover:scale-[35] z-10" />
        </button>
      </form>
    </>
  );
};

export { ContactForm };
