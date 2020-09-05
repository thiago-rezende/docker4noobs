module.exports = {
    base: "/docker4noobs",
    title: "Docker 4 Noobs",
    theme: "yuu",
    description: "Guia completo de Docker, Docker Compose, Swarm e Kubernetes",
    head: [
        ["link", { rel: "icon", href: "/favicon.ico" }]
    ],
    themeConfig: {
        yuu: {
            defaultDarkTheme: true,
            defaultColorTheme: "purple",
        },
        nav: [
            { text: "Home", link: "/" },
            { text: "Tutorial", link: "/1-instalacao/0-preparando-a-maquina.html" },
            { text: "He4rt", link: "https://twitter.com/He4rtDevs" }
        ],
        sidebar: [
            {
                title: 'Instalação',   // required
                collapsable: false, // optional, defaults to true
                children: [
                    '/1-instalacao/0-preparando-a-maquina',
                    '/1-instalacao/1-git',
                    '/1-instalacao/2-docker',
                    '/1-instalacao/3-docker-compose',
                    '/1-instalacao/4-kubernetes',
                    '/1-instalacao/5-packer'
                ]
            }
        ]
    }
};
