import React, { Component } from "react";
import { Table } from "reactstrap";
import NewTradeInfoModal from "./NewTradeInfoModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";

class TradeInfoList extends Component {
  render() {
    const tradeinfos = this.props.tradeinfos;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Trade ID</th>
            <th>Party1</th>
            <th>Party2</th>
            <th>Product class</th>
            <th>Product type</th>
            <th>Trade date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!tradeinfos || tradeinfos.length <= 0 ? (
            <tr>
              <td colSpan="7" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            tradeinfos.map((tradeinfo) => (
              <tr key={tradeinfo.trade_id}>
                <td>{tradeinfo.trade_id}</td>
                <td>{tradeinfo.party1}</td>
                <td>{tradeinfo.party2}</td>
                <td>{tradeinfo.prod_class}</td>
                <td>{tradeinfo.prod_type}</td>
                <td>{tradeinfo.trade_dt}</td>
                <td align="center">
                  <NewTradeInfoModal
                    create={false}
                    tradeinfo={tradeinfo}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    trade_id={tradeinfo.trade_id}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default TradeInfoList;
