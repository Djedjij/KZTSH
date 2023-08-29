import React from "react";

const ContactsTable = (props) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Должность</th>
            <th>ФИО</th>
            <th>Внутренний телефон</th>
            <th>Телефон</th>
          </tr>
        </thead>
        <tbody>
          {props.contactsList.map((el) => (
            <tr key={el.job}>
              <td>{el.job} </td>
              <td>{el.name}</td>
              <td>{el.internalPhone}</td>
              <td>{el.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsTable;
