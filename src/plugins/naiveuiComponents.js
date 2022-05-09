import { create, NModal } from 'naive-ui';
import { NIcon } from 'naive-ui';
import { NButton, NDropdown } from 'naive-ui';
import { NInput, NInputGroup, NCard, NForm, NFormItem, NCheckbox } from 'naive-ui';
import { NPagination } from 'naive-ui';
import { NNotificationProvider, NMessageProvider } from 'naive-ui';

const naiveUiComponents = create({
  components: [
    NIcon,
    NButton,
    NDropdown,
    NInput,
    NInputGroup,
    NCard,
    NPagination,
    NModal,
    NNotificationProvider,
    NForm,
    NFormItem,
    NCheckbox,
    NMessageProvider,
  ],
});

export default naiveUiComponents;
