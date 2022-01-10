<template>
  <div class="image-selector-wrapper">
    <h2 class="image-selector-headline">Select a Window</h2>
    <ul class="image-list">
      <li class="image-list-item" v-for="(image, index) in images" :key="index">
        <div class="image-wrapper">
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
      selectedImageId: "",
      isSelected: false,
    };
  },
  methods: {
    onSelectImage(imageData) {
      console.log({ imageData });
    },
  },
};
</script>

<style scoped>
.image-selector-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  text-align: center;
}
.image-selector-headline {
  font-size: 18px;
  font-weight: 500;
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
}

.selected-image {
  margin-top: 5px;
  height: 100px;
  width: 100px;
}
</style>