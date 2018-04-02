export const fruitMixin = {
  data() {
    return {
      text: "Hello ma boi",
      fruits: ["Apple", "Banana", "Lemon", "Melon"],
      filterText: ""
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  }
}
