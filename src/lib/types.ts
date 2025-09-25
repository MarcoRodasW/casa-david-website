export enum NavigationLinks {
    Home = "home",
    About = "about",
    Services = "services",
    Contact = "contact",
}

export const navigation_items = [
    {
        id: NavigationLinks.Home,
        name: "Home",
        href: `#${NavigationLinks.Home}`,
        show: false,
    },
    {
        id: NavigationLinks.About,
        name: "Acerca de Nosotros",
        href: `#${NavigationLinks.About}`,
        show: true,
    },
    {
        id: NavigationLinks.Services,
        name: "Servicios",
        href: `#${NavigationLinks.Services}`,
        show: true,
    },
    {
        id: NavigationLinks.Contact,
        name: "Contactanos",
        href: `#${NavigationLinks.Contact}`,
        show: true,
    },
];