import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import TradeInfoList from "./TradeInfoList";
import NewTradeInfoModal from "./NewTradeInfoModal";
import PdfControl from "./PdfControl";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    tradeinfos: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getTradeInfos = () => {
    axios
      .get(API_URL)
      .then((res) => this.setState({ tradeinfos: res.data }))
      .catch((err) => console.log(err));
  };

  resetState = () => {
    this.getTradeInfos();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <TradeInfoList
              tradeinfos={this.state.tradeinfos}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewTradeInfoModal create={true} resetState={this.resetState} />
          </Col>
          <Col>
            <PdfControl>resetState={this.resetState}</PdfControl>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
