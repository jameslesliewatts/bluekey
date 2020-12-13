<template>
  <div>
    <div class="tabs">
      <ul class="tabs-list">
        <li
          v-for="tab in tabs"
          :key="tab.name"
          :class="{ 'is-active': tab.isActive }"
          @click="selectTab(tab)"
        >
          {{ tab.name }}
        </li>
      </ul>
    </div>
    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { tabs: [] }
  },
  created() {
    this.tabs = this.$children
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.tabs-list {
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  background-color: $bk-secondary-opacity;
  li {
    margin: 10px;
    // padding: 10px 20px;
    // border: $bk-border;
    // border-radius: 4px;
    // cursor: pointer;
    // @extend .secondary-button;
    @include custom-button(#fff, #fff);
    color: #000;
    &.is-active {
      background: $bk-primary;
      color: #fff;
    }
  }
}
</style>
