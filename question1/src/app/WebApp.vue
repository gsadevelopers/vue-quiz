<template>
  <div class="page" :class="{ shownot: show === false }">
    <router-view name="menu" @show="show = $event"></router-view>
    <router-view name="main"></router-view>
  </div>
</template>

<script>
/**
 * WebApp defines the overall structure of the page.
 */
export default {
  name: 'WebApp',
  data: function() {
    return {
      show: null, // UI flag to determine whether to hide the menu.
    };
  },
};
</script>
