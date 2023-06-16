import { defineStore } from "pinia";
import { ref } from "vue";

export interface TreeViewItem {
  id: number;
  label: string;
  children?: TreeViewItem[];
}

export const useTree = defineStore("tree", () => {
  const treeViewItems = ref<TreeViewItem[]>([
    {
      id: 1,
      label: "Javascript",
      children: [
        {
          id: 2,
          label: "Vue",
          children: [
            { id: 5, label: "Vue-Router" },
            { id: 6, label: "Pinia" },
          ],
        },
        {
          id: 3,
          label: "React",
          children: [
            { id: 7, label: "Redux" },
            { id: 8, label: "Remix" },
          ],
        },
        { id: 4, label: "Angular" },
      ],
    },
    {
      id: 9,
      label: "Java",
      children: [
        {
          id: 10,
          label: "Spring Boot",
        },
      ],
    },
  ]);

  return {
    treeViewItems,
  };
});
