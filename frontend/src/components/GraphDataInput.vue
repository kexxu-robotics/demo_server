<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="inputValue" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "GraphDataInput",
  data() {
    return {
      inputValue: ''
    };
  },
  methods: {
    handleSubmit() {
      const delimiter = ',';
      const arrayOfSubstrings = this.inputValue.split(delimiter);
      console.log(arrayOfSubstrings);
      const jsonString = JSON.stringify(arrayOfSubstrings);
    }
  }
};
</script>
