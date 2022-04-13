<template>
  <div class="pt-10">
    <div class="p-12px my-0 mx-auto w-auto">
      <div class="title text-center pb-5 text-2xl font-bold">萤石云工具箱</div>
      <div class="search-box my-0 mx-auto">
        <n-input-group>
          <n-input v-model:value="key" type="text" placeholder="请输入搜索关键字" />
          <n-button
            type="primary"
            @click="
              searchCamera();
              initPage();
            "
            >搜索</n-button
          >
        </n-input-group>
      </div>
      sadasds

      <section class="px-auto mt-30 flex flex-wrap justify-center">
        <div v-show="!searchFlag" v-for="item in cameraList" :key="item.id">
          <cameraPreview :cameraInfo="item"></cameraPreview>
        </div>
        <div v-show="searchFlag" v-for="item in searchResult" :key="item.id">
          <cameraPreview :cameraInfo="item"></cameraPreview>
        </div>
        <!-- <i v-for="i in 4" :key="i" class="w-10 mr-10"> </i> -->
      </section>
      <n-pagination v-model:page="pageStart" :page-count="pageSize" :page-slot="5" :default-page="0" :onUpdate:page="getCameraList" show-quick-jumper class="justify-center">
        <template #goto> 跳至 </template>
      </n-pagination>
    </div>
  </div>
</template>

<style>
  @import '@assets/scss/ys7.scss';
</style>

<script setup>
  import { searchResult, searchCamera, key, searchFlag } from '@components/common/camera/cameraSearch';
  import cameraPreview from '@/components/camera-preview.vue';
  import { cameraList, page, getCameraList } from '@/components/common/camera/cameraList';
  import { ref } from 'vue';

  getCameraList();

  const pageStart = ref(0);
  const pageSize = ref(0);

  pageStart.value = page.value.page;
  pageSize.value = Math.ceil(page.value.total / page.value.size);

  const initPage = () => {
    pageStart.value = 0;
    pageSize.value = 0;
  };
</script>
