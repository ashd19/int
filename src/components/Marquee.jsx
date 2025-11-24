import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    logo: "https://www.rubrik.com/content/dam/rubrik/images/icons/navigation/Logo.svg",
  },
  {
    id: 2,
    logo: "/public/ScaleAIlogo.svg",
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
  motion;
  return (
    <div>
      <div className="flex gap-5">
        {data.map((item, index) => (
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 1 }}
            key={index}
          >
            <img
              style={{}}
              src={item.logo}
              className=""
              width={120}
              height={70}
              alt=""
            ></img>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
