import React, { Component } from 'react';
import { Row, Col, Button, Table, Card } from 'elemental';

class IndexPage extends Component {
  render() {
    return (
      <div className="IndexPage">
        <Row>
          <Col sm="10%" />
          <Col sm="80%" >
            <Card>
              <p> This is Ride Share </p>
            </Card>
          </Col>
          <Col sm="10%" />
        </Row>
        <Row>
          <Col sm="10%" />
          <Col sm="80%">
          <Card>
            <Table>
              <colgroup>
                <col width="10%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="10%" />
              </colgroup>
              <thead>
                <tr>
                  <th>Space Available</th>
                  <th>From -&gt; To</th>
                  <th>Traveling Date</th>
                  <th>Pickup Time</th>
                  <th>Location</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="u-text-center"><b>3</b></td>
                  <td>Toronto to Kingston</td>
                  <td>February 26, 2017</td>
                  <td>18:00 to 17:00</td>
                  <td>Downtown, Fairview Mall, STC</td>
                  <td><Button type="primary">Deposit</Button></td>
                </tr>
              </tbody>
            </Table>
          </Card>
          </Col>
          <Col sm="10%" />
        </Row>
      </div>
    );
  }
}

export default IndexPage;
