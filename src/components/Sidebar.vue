<template>
  <div>
    <ul>
      <li
        v-on:click="sideBarClick(item)"
        v-for="item in $store.state.sideData"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    sideBarClick(item) {
      this.$store.state.selectedData = item;
    },
  },
};
</script>
<style>
li {
  cursor: pointer;
}
</style>