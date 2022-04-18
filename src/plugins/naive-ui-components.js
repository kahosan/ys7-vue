import { create, NModal } from 'naive-ui';
import { NIcon } from 'naive-ui';
import { NButton, NDropdown } from 'naive-ui';
import { NInput, NInputGroup, NCard } from 'naive-ui';
import { NPagination } from 'naive-ui';
import { useMessage } from 'naive-ui';
import { NNotificationProvider } from 'naive-ui';

const naiveUiComponents = create({
  components: [NIcon, NButton, NDropdown, NInput, NInputGroup, NCard, NPagination, NModal, NNotificationProvider, useMessage],
});

export default naiveUiComponents;
