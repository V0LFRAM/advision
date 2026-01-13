"use client";

const FormEndSection = ({ formType }) => {
  return formType === "contact" ? (
    <div className="mt-[108px] flex flex-col gap-[10px]">
      <h2 className="font-inter font-[500] uppercase text-center tracking-[-0.02em] text-[16px] xl:text-[32px] leading-[1] text-[rgb(var(--fg))]">
        GOT YOUR IDEA!
      </h2>
      <p className="font-inter font-normal text-base text-[16px] xl:text-[18px] leading-[120%] tracking-[-0.02em] text-[rgb(var(--fg))]">
        Thanks for sending your inspiration — our
        <br />
        team will review it and get back to you within
        <br />
        24 hours with a tailored plan and estimate.
      </p>
      <p className="font-inter font-normal text-[16px] xl:text-[18px] leading-[120%] tracking-[-0.02em] text-[rgb(var(--fg))]">
        {"If you'd like to speed things up, feel free to"}
        <br />
        give us a call at{" "}
        <span className="font-inter font-semibold text-base leading-[1.2] tracking-[-0.02em]">
          +17634855531
        </span>
        .
      </p>
      <h3 className="font-league font-[500] uppercase tracking-[-0.02em] text-[27px] xl:text-[27px] leading-[1] text-[rgb(var(--fg))] mt-[303px]">
        {"LET'S TURN YOUR VISION"}
        <br />
        INTO REALITY!
      </h3>
    </div>
  ) : (
    <div className="mt-[104px] flex flex-col gap-[10px]">
      <h2 className="font-league font-[500] uppercase tracking-[-0.01em] text-center text-[16px] xl:text-[32px] leading-[1] text-[rgb(var(--fg))]">
        Thank You!
      </h2>
      <p className="font-inter font-normal text-[16px] xl:text-[18px] leading-[120%] tracking-[-0.02em] text-[rgb(var(--fg))]">
        We’ve received your request and will call you
        <br />
        within the next hour to discuss the details and
        <br />
        schedule your free on-site measurement.
      </p>
      <p className="font-inter font-normal text-[16px] xl:text-[18px] leading-[120%] tracking-[-0.02em] text-[rgb(var(--fg))]">
        {"If you'd like to speed things up, feel free to"}
        <br />
        give us a call at{" "}
        <span className="font-inter font-semibold text-base leading-[1.2] tracking-[-0.02em]">
          +17634855531.
        </span>
      </p>
      <h3 className="font-league font-[500] uppercase tracking-[-0.02em] text-[30px] xl:text-[30px] leading-[1] text-[rgb(var(--fg))] mt-[287px]">
        {"Looking forward to"}
        <br />
        bringing your vision
        <br />
        to life!
      </h3>
    </div>
  );
};

export { FormEndSection };
