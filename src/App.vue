<script lang="ts" setup>
import { useTree } from "./store/tree";
import TreeView from "./components/TreeView.vue";

const tree = useTree();
</script>

<template>
  <div class="parent h-screen flex items-center justify-center">
    <TreeView :items="tree.treeViewItems" />
  </div>
</template>
