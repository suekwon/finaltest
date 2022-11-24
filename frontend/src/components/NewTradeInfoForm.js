import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewTradeInfoForm extends React.Component {
  state = {
    trade_id: "",
    party1: "",
    party2: "",
    prod_class: "",
    prod_type: "",
    trade_dt: "",
  };

  componentDidMount() {
    if (this.props.tradeinfo) {
      const { trade_id, party1, party2, prod_class, prod_type, trade_dt } =
        this.props.tradeinfo;
      this.setState({
        trade_id,
        party1,
        party2,
        prod_class,
        prod_type,
        trade_dt,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createTradeInfo = (e) => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editTradeInfo = (e) => {
    e.preventDefault();
    console.log("#######  editTradeInfo: ", this.state);
    axios.put(API_URL + this.state.trade_id, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form
        onSubmit={
          this.props.tradeinfo ? this.editTradeInfo : this.createTradeInfo
        }
      >
        <FormGroup>
          <Label for="trade_id">Trade ID:</Label>
          <Input
            type="number"
            name="trade_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.trade_id)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="party1">Party1:</Label>
          <Input
            type="text"
            name="party1"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.party1)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="party2">Party2:</Label>
          <Input
            type="text"
            name="party2"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.party2)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="prod_class">Product class:</Label>
          <Input
            type="text"
            name="prod_class"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.prod_class)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="prod_type">Product Type:</Label>
          <Input
            type="text"
            name="prod_type"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.prod_type)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="trade_dt">Trade Date:</Label>
          <Input
            type="text"
            name="trade_dt"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.trade_dt)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewTradeInfoForm;
