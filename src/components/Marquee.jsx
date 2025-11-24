import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    logo: "https://www.rubrik.com/content/dam/rubrik/images/icons/navigation/Logo.svg",
  },
  {
    id: 2,
    logo: "/ScaleAIlogo.svg",
  },
  {
    id: 3,
    logo: "https://cdn.prod.website-files.com/5e4ff204e7b6f80e402d407a/6539f4e75f5768f222ef3a99_gorgias-new-logo-white.svg",
  },
  {
    id: 4,
    logo: "https://www.spoton.com/_next/static/media/spoton-logo-white.f07227e6.svg",
  },
  {
    id: 5,
    logo: "https://rewst.io/images/rewst-logo-horizontal.svg",
  },
];

function Marquee() {
  // duplicate items so the animated track can loop seamlessly
  const items = [...data, ...data];

  return (
    <div className="overflow-hidden bg-neutral-200">
      <motion.div
        className="flex gap-5 bg-neutral-200 h-[100px]"
        style={{ width: "max-content", alignItems: "center" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", repeat: Infinity, duration: 12 }}
      >
        {items.map((item, i) => (
          <div key={`${item.id}-${i}`}>
            <img
              src={item.logo}
              width={120}
              style={{
                filter: "grayscale(100%)",
                opacity: "95%",
              }}
              height={70}
              alt=""
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
