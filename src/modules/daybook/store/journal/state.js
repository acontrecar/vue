//Se almacena la información de la aplicación

export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nunc sit amet aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl",
      picture: null,
    },

    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: "Pariatur pariatur nostrud adipisicing velit sunt aute laborum laboris cupidatat. Ut non cillum ut cillum aliqua eu sunt. Duis labore minim ad est non proident proident excepteur anim enim ipsum.",
      picture: null,
    },

    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "Excepteur fugiat velit qui Lorem magna in magna dolore elit cillum eu nulla pariatur nostrud. Ullamco officia occaecat quis ea Lorem veniam id labore proident aliqua. Ullamco reprehenderit eu id pariatur. Dolor magna aute sit reprehenderit consequat do dolore ad. Et cupidatat aute velit ipsum officia ipsum quis veniam qui amet proident. Laborum id incididunt ullamco sunt mollit nostrud occaecat do non eiusmod Lorem. Eu dolor duis esse sunt adipisicing nulla nostrud consequat adipisicing.",
      picture: null,
    },
  ],
});
