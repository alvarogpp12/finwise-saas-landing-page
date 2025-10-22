import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Producción Técnica',
        price: 'Proyecto',
        features: [
            'Briefing Inicial',
            'Coordinación de equipos humanos y técnicos',
            'Plan de producción alineado a objetivos',
        ],
    },
    {
        name: 'Diseño Conceptual',
        price: 'Proyecto',
        features: [
            'Idea creativa y guion técnico',
            'Storyboard visual',
            'Planificación de recursos y tiempos',
        ],
    },
    {
        name: 'Postproducción y Cobertura',
        price: 'Proyecto',
        features: [
            'Edición, color y audio profesional',
            'Entregas en formatos requeridos',
            'Cobertura mediática con GTRES',
        ],
    },
]