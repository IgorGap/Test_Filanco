import React from 'react';
import HostingData from '../InfoTable/HostingData';
import {
  IconListWrapper,
  IconListHeader,
  IconListItem,
  IconListItemSpan,
  IconList,
} from './Symbol.styles';

function Symbol() {
  return (
    <IconListWrapper>
      <IconListHeader>Условные обозначения</IconListHeader>
      <IconList>
        <IconListItem>
          <IconListItemSpan>{HostingData.actions.mail}</IconListItemSpan>
          Почтовые домены
        </IconListItem>
        <IconListItem>
          <IconListItemSpan>{HostingData.actions.users}</IconListItemSpan>
          FTP пользователи
        </IconListItem>
        <IconListItem>
          <IconListItemSpan>{HostingData.actions.folder}</IconListItemSpan>
          Работа с файлами
        </IconListItem>
        <IconListItem>
          <IconListItemSpan>{HostingData.actions.db}</IconListItemSpan>
          Базы данных
        </IconListItem>
        <IconListItem>
          <IconListItemSpan>{HostingData.actions.clock}</IconListItemSpan>
          Cron
        </IconListItem>
        <IconListItem>
          <IconListItemSpan>{HostingData.actions.mailFilter}</IconListItemSpan>
          Mail Filter
        </IconListItem>
        <IconListItem>
          D Прикрепить домен
        </IconListItem>
        <IconListItem>
          A Создать алиас
        </IconListItem>
        <IconListItem>
          S Создать поддомен
        </IconListItem>
      </IconList>
    </IconListWrapper>
  );
}

export default Symbol;
