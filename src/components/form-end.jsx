"use client";

const FormEndSection = ({ formType }) => {
  return (
    formType === "contact" ? (
    <div className="mt-[104px] flex flex-col gap-[20px]">
      <h2 className="font-league font-[500] uppercase tracking-[-0.01em] text-[32px] xl:text-[48px] leading-[1] text-[rgb(var(--fg))]">
        GOT YOUR IDEA!
      </h2>
      <p className="font-inter font-normal text-[16px] xl:text-[18px] leading-[100%] tracking-[-0.02em] text-[rgb(var(--fg))]">
        Thanks for sending your inspiration — our
        <br />
        team will review it and get back to you within
        <br />
        24 hours with a tailored plan and estimate.
      </p>
      <p className="font-inter font-normal text-[16px] xl:text-[18px] leading-[100%] tracking-[-0.02em] text-[rgb(var(--fg))]">
        {"If you'd like to speed things up, feel free to"}
        <br />
        give us a call at +17634855531.
      </p>
      <h3 className="font-league font-[500] uppercase tracking-[-0.01em] text-[24px] xl:text-[32px] leading-[1] text-[rgb(var(--fg))]">
        {"LET'S TURN YOUR VISION"}
        <br />
        INTO REALITY!
      </h3>
    </div>) 
    :
    (<div className="mt-[104px] flex flex-col gap-[20px]">
      <h2 className="font-league font-[500] uppercase tracking-[-0.01em] text-[32px] xl:text-[48px] leading-[1] text-[rgb(var(--fg))]">
        test
      </h2>
      <p className="font-inter font-normal text-[16px] xl:text-[18px] leading-[100%] tracking-[-0.02em] text-[rgb(var(--fg))]">
        test
        <br />
        test
        <br />
        test
      </p>
      <p className="font-inter font-normal text-[16px] xl:text-[18px] leading-[100%] tracking-[-0.02em] text-[rgb(var(--fg))]">
        {"If you'd like to speed things up, feel free to"}
        <br />
        give us a call at +17634855531.
      </p>
      <h3 className="font-league font-[500] uppercase tracking-[-0.01em] text-[24px] xl:text-[32px] leading-[1] text-[rgb(var(--fg))]">
        {"LET'S TURN YOUR VISION"}
        <br />
        INTO REALITY!
      </h3>
    </div>)
  );
};

export { FormEndSection };
