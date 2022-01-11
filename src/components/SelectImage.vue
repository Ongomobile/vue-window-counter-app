<template>
  <div class="image-selector-wrapper">
    <h2 class="image-selector-headline">Select a Window (optional)</h2>
    <ul class="image-list">
      <li class="image-list-item" v-for="(image, index) in images" :key="index">
        <div
          class="image-wrapper"
          @click="onSelectImage(image)"
          :class="{ selected: isSelected }"
        >
          <p class="window-name">{{ image.name }}</p>
          <img :src="image.url" :alt="image.alt" class="selected-image" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
    },
  },
  data() {
    return {
      isSelected: false,
    };
  },
  methods: {
    onSelectImage(imageData) {
      // toggle isSelected to add selected class then reset set set back to false some how?
      this.$emit("on-select-image", imageData);
    },
  },
};
</script>

<style scoped>
.image-selector-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}
.image-selector-headline {
  font-size: 18px;
  font-weight: 500;
  color: #36454f;
}

.image-list {
  display: flex;
  padding: 10px;
  list-style: none;
  overflow: auto;
}
.image-list-item {
  padding: 0;
  margin-right: 10px;
}
.image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 160px;
  width: 160px;
  padding: 10px;
  border: solid 1px #eee;
  box-shadow: var(--box-shadow);
  border-radius: 5px;
  cursor: pointer;
}
.window-name {
  color: #36454f;
}

.selected-image {
  margin-top: 5px;
  height: 100px;
  width: 100px;
  border-radius: 5px;
}

.selected {
  border: solid 3px red;
}
</style>