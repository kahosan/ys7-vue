import { request } from '@/utils/request';
import { reactive, ref } from 'vue';

let cameraList = ref([]);

function getCameraList(pageStart = 0) {
  let page = reactive({
    pageStart: 0,
    pageCount: 0,
  });

  if (pageStart > 0) pageStart -= 1;

  request.post('/api/list', { pageStart, pageSize: 12 }).then(res => {
    cameraList.value = res.data.data;

    page.pageStart = res.data.page.page === 0 ? 1 : res.data.page.page;
    page.pageCount = Math.ceil(res.data.page.total / res.data.page.size);
  });

  return {
    cameraList,
    page,
  };
}

export { getCameraList };
