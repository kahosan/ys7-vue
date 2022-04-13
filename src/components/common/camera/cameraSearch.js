import { request } from '@/utils/request';
import { ref } from 'vue';

const key = ref('');
const searchResult = ref([]);
const searchFlag = ref(false);

async function searchCamera() {
  searchResult.value = (
    await request
      .post('/api/search', {
        key: key.value,
      })
      .catch(err => console.log(err.response))
  )?.data.map(item => item);

  searchFlag.value = true;
}

export { key, searchResult, searchCamera, searchFlag };
