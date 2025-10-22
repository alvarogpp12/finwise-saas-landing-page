import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "¿Listo para crear contenido inolvidable?",
    quickLinks: [
        {
            text: "Inicio",
            url: "#hero"
        },
        {
            text: "Servicios",
            url: "#pricing"
        },
        {
            text: "Casos de Éxito",
            url: "#testimonials"
        },
        {
            text: "Contacto",
            url: "#contacto"
        }
    ],
    email: 'alvarogpp@kometa.tv',
    telephone: '+34 649842031',
    socials: {
        
    }
}