"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn } from "@/variants";
const Footer = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <div className="py-12 xl:-mt-32 flex flex-col xl:flex-row xl:justify-between">
        <p className="text-black font-semibold text-center mb-4 xl:mb-0">
          Pagina web diseñada y programada por{" "}
          <Link
            href="https://portafolio-pi-liard.vercel.app/"
            className="underline"
            target="_blank"
          >
            Santiago Faginoli
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Footer;
