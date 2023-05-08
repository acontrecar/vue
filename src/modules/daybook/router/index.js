export default {
  name: "daybook",
  component: () =>
    import(/* webpackChunkName: "daybook" */ "../layouts/DayBookLayout"),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () =>
        import(
          /* webpackChunkName: "daybook-no-entry" */ "../views/NoEntrySelected"
        ),
    },

    {
      path: ":id",
      name: "entry",
      component: () =>
        import(/* webpackChunkName: "daybook-no-entry" */ "../views/EntryView"),

      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
  ],
};
