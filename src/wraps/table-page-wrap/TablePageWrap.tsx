import React from 'react'
import Page from '../../components/page/Page'
import Table from '../../components/table/Table'
import DelSelectedUsersButtonWrap from '../del-selected-users-button-wrap/DelSelectedUsersButtonWrap'

export default function TablePageWrap() {
    return (
        <Page>
            <>
                <Table/>
                <DelSelectedUsersButtonWrap />
            </>

        </Page>
            

    )
}
