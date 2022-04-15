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
          >
            搜索
          </n-button>
        </n-input-group>
      </div>
      <section class="px-auto mt-30 flex flex-wrap justify-center">
        <div v-for="item in cameraList" v-show="!searchFlag" :key="item.id">
          <cameraPreview :camera-info="item" />
        </div>
        <div v-for="item in searchResult" v-show="searchFlag" :key="item.id">
          <cameraPreview :camera-info="item" />
        </div>
        <!-- <i v-for="i in 4" :key="i" class="w-10 mr-10"> </i> -->
      </section>
      <n-pagination v-model:page="pageStart" :page-count="pageCount" :page-slot="5" :on-update:page="getCameraList" show-quick-jumper class="justify-center">
        <template #goto> 跳至 </template>
      </n-pagination>
    </div>
  </div>
</template>

<script setup>
  import cameraPreview from '@/components/camera-preview.vue';
  import { searchResult, searchCamera, key, searchFlag } from '@components/common/camera/cameraSearch';
  import { getCameraList } from '@/components/common/camera/cameraList';
  import { toRefs } from 'vue';

  const { cameraList, page } = getCameraList();

  const { pageStart, pageCount } = toRefs(page);

  const initPage = () => {
    pageStart.value = 0;
    pageCount.value = 0;
  };
</script>

<style>
  @import '@assets/scss/ys7.scss';
</style>
