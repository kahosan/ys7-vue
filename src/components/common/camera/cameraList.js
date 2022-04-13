import { request } from '@/utils/request';
import { reactive, ref } from 'vue';

let cameraList = ref([]);
let page = ref({});

function getCameraList(pageStart = 0) {
  request.post('/api/list', { pageStart, pageSize: 12 }).then(res => {
    cameraList.value = res.data.data;
    page.value = res.data.page;
  });
}

export { cameraList, page, getCameraList };
