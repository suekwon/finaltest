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
            <th>Party1</th>
            <th>Party2</th>
            <th>Product class</th>
            <th>Product type</th>
            <th>Trade date</th>
            <th>Input date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!tradeinfos || tradeinfos.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            tradeinfos.map((tradeinfos) => (
              <tr key={tradeinfos.trade_id}>
                <td>{tradeinfos.party1}</td>
                <td>{tradeinfos.party2}</td>
                <td>{tradeinfos.prod_class}</td>
                <td>{tradeinfos.prod_type}</td>
                <td>{tradeinfos.trade_dt}</td>
                <td>{tradeinfos.input_dt}</td>
                <td align="center">
                  <NewTradeInfoModal
                    create={false}
                    tradeinfos={tradeinfos}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={tradeinfos.trade_id}
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
