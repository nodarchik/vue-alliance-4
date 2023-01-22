const app = Vue.createApp({
  data() {
    return {
      user: null,
      isVisible: true,
      bgColor: "",
    };
  },
  methods: {
    setUser(event) {
      this.user = event.target.value;
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
  },
  computed: {
    userClass() {
      if (this.user === "user1" || this.user === "user2") {
        return this.user;
      } else {
        return "";
      }
    },
  },
});

app.mount("#assignment");
