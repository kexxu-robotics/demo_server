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
      console.log(this.inputValue);
    }
  }
};
</script>
