import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";


const ImageSection = () => {
    const ref = useRef(null);
    const isInViewImage = useInView(ref, { once: true, margin: "-40% 0px" });
    
  return (
    <section ref={ref}>
        <Image
            src="/images/about-bottom-decor.png"
            alt="Decor"
            width={1920}
            height={100}
            className="w-full h-auto xl:block hidden"
            style={{
                transform: isInViewImage ? "scale(1.1)" : "scale(1)",
                transition: "transform 4s cubic-bezier(.4,0,.2,1)",
              }}
        />
        <Image
            src="/images/about-bottom-decor-mob.png"
            alt="Decor"
            width={1920}
            height={100}
            className="w-full h-auto xl:hidden"
            style={{
                transform: isInViewImage ? "scale(1.1)" : "scale(1)",
                transition: "transform 4s cubic-bezier(.4,0,.2,1)",
              }}
        />
    </section>
  );
};

export { ImageSection };