export const loadMenuContent = () => ({
  groups: [
    {
      label: "getting started",
      baselink: "start",
      unclickable: true,
      baselink: "start",
      css: ["filter: brightness(110%)", "background-color:"],
      children: [{ label: "install", sublink: "/install" }],
    },
    {
      label: "core features",
      baselink: "/core",
      children: [
        { label: "scopes", sublink: "/scopes" },
        { label: "directives", sublink: "/directives" },
        { label: "modules", sublink: "/modules" },
        { label: "routing", sublink: "/routing" },
      ],
    },
    {
      label: "lifecycle directives",
      baselink: "/lifecycle",
      children: [
        { label: "+loading", sublink: "/loading" },
        { label: "+loaded", sublink: "/loaded" },
        { label: "+unloading", sublink: "/unloading" },
        { label: "+unloaded", sublink: "/unloaded" },
      ],
    },
    {
      label: "control directives",
      baselink: "/control",
      children: [
        { label: "$checked", sublink: "/checked" },
        { label: "$each", sublink: "/each" },
        { label: "$focus", sublink: "/focus" },
        { label: "$html", sublink: "/html" },
      ],
    },
  ],
});
