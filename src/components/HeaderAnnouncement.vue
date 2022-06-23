<script>
export default {
  props: ["msg"],
};
</script>

<template>
  <div class="announcement text-center">
    <p>{{ msg }}</p>
  </div>
</template>

<style scoped>
.announcement {
  padding: 5px;
  color: var(--clr-indigo);
  background-color: var(--clr-light-indigo);
}
</style>
