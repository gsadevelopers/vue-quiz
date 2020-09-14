<template>
  <div ref="menu" class="page__menu" :class="{ show: show }">
    <div class="panel-user">
    </div>
    <!-- .panel-user -->

    <nav>
      <router-link to="/dashboard"
        ><i class="material-icons">home</i> Dashboard</router-link
      >
      <router-link to="/dashboard"
        ><i class="material-icons">timer</i> Relief Planning</router-link
      >
    </nav>

    <div class="toggle" @click="atClickToggle">
      <template v-if="show">
        <i class="material-icons">keyboard_arrow_left</i>
      </template>
      <template v-else>
        <i class="material-icons">keyboard_arrow_right</i>
      </template>
    </div>
  </div>
</template>

<script>
/**
 * @emits show - Emits this event when the menu toggle button is clicked. True when menu should be visible, false otherwise.
 */
export default {
  name: 'Menu',
  data: function() {
    return {
      clickTarget: null, // For tracking event target to allow "click away".
      defaultShow: null, // For determining the default state of the menu i.e desktop or mobile.
      show: null,
    };
  },
  mounted: function() {
    // Check if the menu is hidden or not by CSS.
    if (this.$refs.menu.offsetLeft === 0) {
      // i.e. not hidden.
      this.show = true;
      this.defaultShow = true;
    } else {
      this.show = false;
      this.defaultShow = false;
    }
  },
  methods: {
    atClickToggle: function(evt) {
      this.show = !this.show;
      // Emit so that it can affect the menu even on desktop.
      this.$emit('show', this.show);
      if (this.show) {
        // Only attach the listener if default is hidden.
        if (!this.defaultShow) {
          // Menu is displayed. Store the click target and attach listener.
          this.clickTarget = evt.target;
          document.addEventListener('click', this.globalDismiss, true);
        }
      } else {
        // Menu is hidden. Clear the click target and remove listener.
        this.clickTarget = null;
        document.removeEventListener('click', this.globalDismiss, true);
      }
    },
    globalDismiss: function(evt) {
      if (evt.target !== this.clickTarget && evt.target !== this.$el) {
        // Only close if not same target - otherwise, the menu cannot close on toggle.
        this.show = false;
        this.clickTarget = null;
        document.removeEventListener('click', this.globalDismiss, true);
        this.$emit('show', this.show);
      }
    },
  },
};
</script>
