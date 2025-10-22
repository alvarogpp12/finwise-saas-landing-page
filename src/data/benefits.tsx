import { FiAperture, FiCpu, FiFilm, FiLayers, FiSettings } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Nuestro Enfoque — Innovación Continua",
        description: "Apostamos por la vanguardia tecnológica y la emoción como motores de la experiencia audiovisual moderna.",
        bullets: [
            {
                title: "Creatividad Técnica",
                description: "Fusionamos creatividad, técnica avanzada y narrativa visual para crear producciones memorables que superan las expectativas.",
                icon: <FiCpu size={26} />
            },
            {
                title: "Experiencias a Medida",
                description: "Cada proyecto es único. Diseñamos soluciones personalizadas que reflejan la identidad y objetivos de marca.",
                icon: <FiLayers size={26} />
            },
            {
                title: "Arte Audiovisual",
                description: "Convertimos lo técnico en arte. Cada elemento visual y sonoro crea una experiencia cinematográfica inolvidable.",
                icon: <FiAperture size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Tecnología y Equipamiento de Vanguardia — Equipamiento, Iluminación, Edición",
        description: "Parque técnico propio 4K, drones profesionales, ópticas cinematográficas e islas con Mac Pro M4 y DaVinci Resolve.",
        bullets: [
            {
                title: "Equipamiento",
                description: "Máxima calidad y versatilidad para cualquier producción. Imágenes de alto impacto y fidelidad absoluta.",
                icon: <FiSettings size={26} />
            },
            {
                title: "Iluminación",
                description: "Soluciones lumínicas precisas para plató, exteriores o entornos complejos con alto rendimiento.",
                icon: <FiAperture size={26} />
            },
            {
                title: "Edición",
                description: "Flujo ágil y preciso bajo estándares de plataforma, con DaVinci Resolve para control total de imagen y sonido.",
                icon: <FiFilm size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Beneficios — Equipo y Servicio",
        description: "Equipo multidisciplinar, servicio total, visión cinematográfica, tecnología innovadora y personalización total.",
        bullets: [
            {
                title: "Equipo Multidisciplinar",
                description: "Técnicos y creativos expertos en cada fase de la producción.",
                icon: <FiLayers size={26} />
            },
            {
                title: "Servicio Total",
                description: "De la idea a la entrega final con control y rapidez.",
                icon: <FiSettings size={26} />
            },
            {
                title: "Visión Cinematográfica",
                description: "Narrativa y estética de alto nivel para experiencias memorables.",
                icon: <FiAperture size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]