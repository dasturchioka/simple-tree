<script lang="ts" setup>
import type { PropType } from "vue";
import { TreeViewItem } from "../store/tree";
import { ref } from "vue";

defineProps({
  item: {
    type: Object as PropType<TreeViewItem>,
    required: true,
  },
});

const showChildren = ref(false);

const handleShowChildren = () => {
  showChildren.value = !showChildren.value;
};
</script>

<template>
  <button
    @click="handleShowChildren"
    class="border rounded outline-none px-4 py-2"
    v-if="item.children"
  >
    {{ item.label }}
  </button>
  <p v-else>{{ item.label }}</p>
  <div class="tree-children" v-if="item.children && showChildren">
    <div class="my-2 ml-4" v-for="(child, index) in item.children" :key="index">
      <tree-item :item="child" />
    </div>
  </div>
</template>
