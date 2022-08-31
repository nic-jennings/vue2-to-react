<template>
  <div class="react" ref="container" />
</template>

<script>
import { createElement } from "react";
import { createRoot } from "react-dom/client";

export default {
  inheritAttrs: false,
  props: {
    component: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      reactRoot: null,
    };
  },
  methods: {
    updateReactComponent() {
      this.reactRoot.render(createElement(this.component, this.$attrs));
    },
  },
  mounted() {
    this.reactRoot = createRoot(this.$refs.container);
    this.updateReactComponent();
  },
  destroyed() {
    this.reactRoot.unmount();
  },
  watch: {
    $attrs: {
      deep: true,
      handler() {
        this.updateReactComponent();
      },
    },
  },
};
</script>
