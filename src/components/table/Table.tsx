import TableUserRows from '../../wraps/table-user-rows-wrap/TableUserRowsWrap';
import TableHeaderCheckWrap from '../../wraps/table-header-check-wrap/TableHeaderCheckWrap';
import './table.scss';

export default function Table() {

    return (
        <table className="table">
            <caption className="table__caption">Таблица пользователей</caption>
            <tbody>
                <tr className="table__row">
                    <th><TableHeaderCheckWrap /></th>
                    <th>№</th>
                    <th>ФИО</th>
                    <th>Возраст (Лет)</th>
                    <th>Рост</th>
                    <th>Вес</th>
                    <th>Зарплата</th>
                    <th></th>
                    <th></th>
                </tr>
                <TableUserRows />
            </tbody>
        </table>
    )
}
