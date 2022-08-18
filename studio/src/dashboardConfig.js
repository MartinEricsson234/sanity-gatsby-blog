export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62fdfadbbdb10576c1b3cc66",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-8gb2k4du",
                  apiId: "79e82471-89ba-499d-a4ea-442f04c523bd",
                },
                {
                  buildHookId: "62fdfadbec1e9b7d88e5eaa1",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-886r9rwt",
                  apiId: "687858d2-fe2d-4879-a199-33df7c266f3a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/MartinEricsson234/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-886r9rwt.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
