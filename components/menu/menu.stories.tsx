import {
  IconSettings,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons-react';
import { Button } from '@/components';
import { Menu, MenuContent, MenuGroup, MenuItem, MenuLabel, MenuSeparator, MenuTrigger } from '.';

const meta = {
  title: 'Components/Menu',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default = {
  render: () => (
    <Menu>
      <MenuTrigger>
        <Button>Toggle menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuLabel>Application</MenuLabel>
        <MenuGroup>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Messages</MenuItem>
          <MenuItem>Gallery</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuLabel>Danger zone</MenuLabel>
        <MenuGroup>
          <MenuItem>Transfer my data</MenuItem>
          <MenuItem variant="error">Delete my account</MenuItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  ),
};

export const WithDisabledItem = {
  render: () => (
    <Menu>
      <MenuTrigger>
        <Button>Toggle menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuLabel>Application</MenuLabel>
        <MenuGroup>
          <MenuItem>Settings</MenuItem>
          <MenuItem disabled>Messages</MenuItem>
          <MenuItem>Gallery</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuLabel>Danger zone</MenuLabel>
        <MenuGroup>
          <MenuItem>Transfer my data</MenuItem>
          <MenuItem variant="error">Delete my account</MenuItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  ),
};

export const ItemsWithIcons = {
  render: () => (
    <Menu>
      <MenuTrigger>
        <Button>Toggle menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuLabel>Application</MenuLabel>
        <MenuGroup>
          <MenuItem icon={<IconSettings size="0.875rem" />}>Settings</MenuItem>
          <MenuItem icon={<IconMessageCircle size="0.875rem" />}>Messages</MenuItem>
          <MenuItem icon={<IconPhoto size="0.875rem" />}>Gallery</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuLabel>Danger zone</MenuLabel>
        <MenuGroup>
          <MenuItem icon={<IconArrowsLeftRight size="0.875rem" />}>Transfer my data</MenuItem>
          <MenuItem variant="error" icon={<IconTrash size="0.875rem" />}>
            Delete my account
          </MenuItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  ),
};
