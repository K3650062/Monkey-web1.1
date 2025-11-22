export type Species = {
    id: string;
    common_name: string;
    scientific_name: string;
    slug: string;
    image: string;
    range: string;
    status: "Least Concern" | "Vulnerable" | "Endangered" | "Critically Endangered";
    fun_fact: string;
};

export const speciesData: Species[] = [
    {
        id: "1",
        common_name: "Golden Lion Tamarin",
        scientific_name: "Leontopithecus rosalia",
        slug: "golden-lion-tamarin",
        image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=2070&auto=format&fit=crop",
        range: "Brazil (Atlantic Forest)",
        status: "Endangered",
        fun_fact: "They sleep in tree holes to hide from predators at night.",
    },
    {
        id: "2",
        common_name: "Emperor Tamarin",
        scientific_name: "Saguinus imperator",
        slug: "emperor-tamarin",
        image: "https://images.unsplash.com/photo-1535083783855-76462b999886?q=80&w=2050&auto=format&fit=crop",
        range: "Southwest Amazon Basin",
        status: "Least Concern",
        fun_fact: "Named for its resemblance to German Emperor Wilhelm II.",
    },
    {
        id: "3",
        common_name: "Proboscis Monkey",
        scientific_name: "Nasalis larvatus",
        slug: "proboscis-monkey",
        image: "https://images.unsplash.com/photo-1570288685369-f7305163d0e3?q=80&w=1964&auto=format&fit=crop",
        range: "Borneo",
        status: "Endangered",
        fun_fact: "Their large noses amplify their calls to attract mates.",
    },
    {
        id: "4",
        common_name: "Mandrill",
        scientific_name: "Mandrillus sphinx",
        slug: "mandrill",
        image: "https://images.unsplash.com/photo-1516934024742-b461fba47600?q=80&w=1887&auto=format&fit=crop",
        range: "Equatorial Africa",
        status: "Vulnerable",
        fun_fact: "They are the world's largest monkeys.",
    },
];
