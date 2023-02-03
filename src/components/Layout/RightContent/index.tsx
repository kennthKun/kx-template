import { getLocaleStorage, setLocaleStorage } from '@/utils/cookie';
import { Space } from 'antd';
import React, { useEffect, useState } from 'react';
import Avatar from './AvatarDropdown';
import styles from './index.module.less';
import { useSelector } from "react-redux"

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { RoleList, TenantList } = useSelector(({ initialState }: any) => initialState);
  const [list, setList] = useState<object[]>([]);
  const [activited, setActivited] = useState<any>(null);

  const onChangeRole = (item: any) => {
    setActivited(item);
    setLocaleStorage('ROLE_DATA', JSON.stringify(item));
    window.location.href = '/';
  };

  useEffect(() => {
    const localROLE_DATA = getLocaleStorage('ROLE_DATA')
      ? JSON.parse(getLocaleStorage('ROLE_DATA') || '{}')
      : null;
    setList(RoleList);
    setActivited(localROLE_DATA || RoleList?.[0]);
  }, [RoleList])



  return (
    <Space className={styles.right} size="large">
      <Avatar />
    </Space>
  );
};
export default GlobalHeaderRight;
