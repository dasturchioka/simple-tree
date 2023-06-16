<script lang="ts" setup>
import type { PropType } from "vue";
import { TreeViewItem } from "../store/tree";
import TreeItem from "./TreeItem.vue";

const props = defineProps({
  items: {
    type: Array as PropType<TreeViewItem[]>,
    required: true,
  },
});
</script>

<template>
  <div class="tree-items space-y-4">
    <div v-for="(item, index) in props.items" :key="index" class="item">
      <TreeItem :item="item" />
    </div>
  </div>
</template>
