import React from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

const SidebarProfile = () => (
  <div className="sidebar-wrap">
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      vertical
      visible
      width="thin"
    >
      <Menu.Item as="a">
        <Icon name="user circle" />
        Profile
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="users" />
        Friends
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="rocketchat" />
        Chat rooms
      </Menu.Item>
    </Sidebar>

    {/* <Sidebar.Pusher>
        <Segment basic>{children}</Segment>
      </Sidebar.Pusher> */}
  </div>
);

export default SidebarProfile;
