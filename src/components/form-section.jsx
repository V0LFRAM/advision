import Image from "next/image";
import { TitleStroke } from "./ui/title-stroke";
import { ContactForm } from "./contact-form";

const FormSection = () => {
  return (
    <section id="get-a-quote" className="w-full relative">
      <div className="px-[20px] xl:px-[80px] xl:flex ">
        {/* left image for large screens */}
        <div className="hidden xl:block ">
          <Image
            src="/images/form.png"
            alt="Decor"
            width={487}
            height={895}
            className="w-[487px] h-[895px] object-cover"
            priority
          />
        </div>

        <div className="ml-auto ">
          <h2
            className="uppercase tracking-[-0.01em]
            text-[35px] xl:text-[44px] leading-[1] relative mb-[20px] max-w-[602px] "
          >
            Ready to Transform Your Space? Let’s Start With a
            <span className="absolute bottom-[-35px] xl:bottom-[-45px] right-[0px] ">
              <TitleStroke text={"Free Quote"} />
            </span>
          </h2>
          <div className="relative w-[72px] h-[87px] xl:w-[227px] xl:h-[250px] xl:absolute xl:right-0 xl:bottom-[343px]">
            {/* MOBILE IMAGE */}
            <Image
              src="/images/form-mob.png"
              alt="Decor"
              width={1920}
              height={100}
              className="w-full h-auto block xl:hidden"
            />

            {/* DESKTOP IMAGE */}
            <Image
              src="/images/form-laptop.png"
              alt="Decor"
              width={1920}
              height={100}
              className="w-full h-auto hidden xl:block"
            />
          </div>
          <p className="font-'mobile-body' font-normal text-[16px] xl:font-'inter' xl:font-normal xl:text-[20px] xl:leading-[25px] xl:tracking-[-0.02em] max-w-[200px] xl:max-w-[540px] block ml-auto xl:ml-0 relative top-[-30px] xl:top-[50px]">
            Tell us about your project — we’ll contact you within
            <br />
            24 hours with a free quote or consultation.
          </p>
          <ContactForm />

          {/* image for small screens: full-bleed (break out of parent padding), hidden on xl */}
          <div className="block xl:hidden mt-6 -mx-[20px] overflow-hidden">
            <div className="w-screen max-w-none h-[387px]">
              <Image
                src="/images/form.png"
                alt="Decor"
                width={375}
                height={387}
                className="w-screen max-w-none h-[387px] object-cover object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FormSection };
