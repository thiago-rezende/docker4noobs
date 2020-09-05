module.exports = {
    base: "/docker4noobs/",
    title: "Docker4noobs pela He4rt Developers",
    theme: "yuu",
    description: "Docker",
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
    }
};
