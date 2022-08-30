/* eslint-disable import/no-unresolved */
import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';

const HostingData = {
  account: 'srv164042 (Бета-SSD)',
  statistics: {
    occupied: '675.01 / 7000',
    cron: 0,
    MySQL: 1,
    FTP: 0,
  },
  mode: 'включен',
  actions: {
    mail: <AiIcons.AiOutlineMail />,
    users: <FaIcons.FaUsers />,
    folder: <AiIcons.AiFillFolderOpen />,
    db: <AiIcons.AiOutlineDatabase />,
    box: <AiIcons.AiOutlineDropbox />,
    mailFilter: <RiIcons.RiMailCheckFill />,
    clock: <AiIcons.AiOutlineClockCircle />,
  },
  IP: '31.28.24.122',
  databaseСapacity: '10.89 MB',
  mailCapacity: '522.43 MB',
  filesCapacity: '141.7 MB',
  comment: '',
  service: 'Бета-SSD',
  login: 'user',
  FTPHostName: 'FTPHostName',
  FTPPassword: '123',
  SSHHostName: 'SSHHostName',
  SSHPassword: '123',
  MySQL: 'MySQL',
  PgSQL: 'PgSQL',
  addresses: [
    { id: 1, address: 'shoku-yoku.ru' },
    { id: 2, address: 'srv164042.hoster-test.ru' },
    { id: 3, address: 'секуеку.рф' },
  ],
};
export default HostingData;
