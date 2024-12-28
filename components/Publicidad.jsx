"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn } from "@/variants";
const Publicidad = () => {
  // Arreglo de fotos con rutas desde la carpeta "public/img"
  const fotos = [
    { id: 1, url: "/img/foto1.jpeg", alt: "" },
    { id: 2, url: "/img/foto2.jpeg", alt: "" },
    { id: 3, url: "/img/foto3.jpeg", alt: "" },
    { id: 4, url: "/img/foto1.jpeg", alt: "" },
    { id: 5, url: "/img/foto2.jpeg", alt: "" },
    { id: 6, url: "/img/foto3.jpeg", alt: "" },
  ];

  return (
    <div className="container mx-auto">
      <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fotos.map((foto) => (
          <div key={foto.id}>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <img
                src={foto.url}
                alt={foto.alt}
                className="w-full h-auto object-cover rounded-md"
              />
              <p className="mt-2 text-gray-700">{foto.alt}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publicidad;
