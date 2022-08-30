import React, { useState, useCallback } from 'react';
import * as AiIcons from 'react-icons/ai';
import HostingData from './HostingData';
import {
  TableWrap,
  TableHeadItem,
  TableHeadVal,
  TableRow,
  TableHeadWrapper,
  TableBodyWrapper,
  TableTitle,
  TableContent,
  TableComment,
  TableButtom,
  TableListItem,
  TableDelete,
  TableList,
} from './InfoTable.styles';

function InfoTableBody() {
  const [addresses, setDomains] = useState(HostingData.addresses);
  const [input, setInput] = useState('');
  const [comment, setComment] = useState(HostingData.comment);

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setComment(input);
  };

  const deleteHandler = useCallback((id) => {
    setDomains((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <TableWrap>
      <TableHeadWrapper>
        <TableRow>
          <TableHeadItem rowSpan="2">Аккаунт</TableHeadItem>
          <TableHeadItem colSpan="4">Статистика</TableHeadItem>
          <TableHeadItem rowSpan="2">Состояние</TableHeadItem>
          <TableHeadItem rowSpan="2">Действия</TableHeadItem>
        </TableRow>
        <TableRow>
          <TableHeadItem>Занято/Всего(Mb)</TableHeadItem>
          <TableHeadItem>Cron</TableHeadItem>
          <TableHeadItem>MySQL</TableHeadItem>
          <TableHeadItem>FTP</TableHeadItem>
        </TableRow>
        <TableRow>
          <TableHeadVal>{HostingData.account}</TableHeadVal>
          <TableHeadVal>{HostingData.statistics.occupied}</TableHeadVal>
          <TableHeadVal>{HostingData.statistics.cron}</TableHeadVal>
          <TableHeadVal>{HostingData.statistics.MySQL}</TableHeadVal>
          <TableHeadVal>{HostingData.statistics.FTP}</TableHeadVal>
          <TableHeadVal>{HostingData.mode}</TableHeadVal>
          <TableHeadVal>
            {HostingData.actions.mail}
            {HostingData.actions.users}
            {HostingData.actions.folder}
            {HostingData.actions.db}
            {HostingData.actions.box}
            {HostingData.actions.mailFilter}
            {HostingData.actions.clock}
          </TableHeadVal>
        </TableRow>
      </TableHeadWrapper>
      <TableBodyWrapper>
        <TableRow>
          <TableTitle>IP-адрес</TableTitle>
          <TableContent colSpan="7">{HostingData.IP}</TableContent>
        </TableRow>
        <TableRow>
          <TableTitle>Объем баз данных</TableTitle>
          <TableContent colSpan="7">
            {HostingData.databaseСapacity}
          </TableContent>
        </TableRow>
        <TableRow>
          <TableTitle>Объем почты</TableTitle>
          <TableContent colSpan="7">{HostingData.mailCapacity}</TableContent>
        </TableRow>
        <TableRow>
          <TableTitle>Объем файлов</TableTitle>
          <TableContent colSpan="7">{HostingData.filesCapacity}</TableContent>
        </TableRow>
        <TableRow>
          <TableTitle>Комментарий</TableTitle>
          {comment !== '' ? (
            <TableContent colSpan="7">{input}</TableContent>
          ) : (
            <TableContent colSpan="7">
              <form onSubmit={submitHandler}>
                <TableComment
                  placeholder="напишите комментарий"
                  type="text"
                  value={input}
                  onChange={inputHandler}
                  name="comment"
                />
                <TableButtom type="submit">Сохранить</TableButtom>
              </form>
            </TableContent>
          )}
        </TableRow>
        <TableRow>
          <TableTitle>Услуга</TableTitle>
          <TableContent colSpan="7">{HostingData.service}</TableContent>
        </TableRow>
        <TableRow>
          <TableTitle>Логин</TableTitle>
          <TableContent colSpan="7">{HostingData.login}</TableContent>
        </TableRow>
        <TableRow>
          <TableTitle>Имя хоста FTP</TableTitle>
          <TableContent colSpan="7">{HostingData.FTPHostName}</TableContent>
        </TableRow>
        <TableRow>
          <TableTitle>Пароль FTP</TableTitle>
          <TableContent colSpan="7">{HostingData.FTPPassword}</TableContent>
        </TableRow>
        <TableRow>
          <TableTitle>Имя хоста SSH</TableTitle>
          <TableContent colSpan="7">{HostingData.SSHHostName}</TableContent>
        </TableRow>
        <TableRow>
          <TableTitle>Пароль SSH</TableTitle>
          <TableContent colSpan="7">{HostingData.SSHPassword}</TableContent>
        </TableRow>
        <TableRow>
          <TableTitle>Имя хоста MySQL</TableTitle>
          <TableContent colSpan="7">{HostingData.MySQL}</TableContent>
        </TableRow>
        <TableRow>
          <TableTitle>Имя хоста PgSQL</TableTitle>
          <TableContent colSpan="7">{HostingData.PgSQL}</TableContent>
        </TableRow>
        <TableRow style={{ borderTop: '1px solid black' }} />
        <TableRow>
          <TableTitle>Привязанные домены</TableTitle>
          <TableContent colSpan="7">
            <TableList>
              {addresses.map((item) => (
                <TableListItem key={item.id}>
                  {item.address}
                  <TableDelete>
                    <AiIcons.AiFillDelete
                      onClick={() => deleteHandler(item.id)}
                      type="button"
                    />
                  </TableDelete>
                </TableListItem>
              ))}
            </TableList>
          </TableContent>
        </TableRow>
      </TableBodyWrapper>
    </TableWrap>
  );
}

export default InfoTableBody;
