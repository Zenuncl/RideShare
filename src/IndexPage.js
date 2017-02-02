import React, { Component } from 'react';
import { Row, Col, Button, Table, Card } from 'elemental';

class IndexPage extends Component {
  render() {
    return (
      <div className="IndexPage">
        <Row>
          <Col sm="100%" >
            <Card>
                <p className="u-text-center"> This is round trip ride share offered by Jiang. Please Read carefully for following information: </p>
                <p className="u-text-left"> 1. <b>$25</b>/trip/person; <b>$45</b>/round trip/person; <b>$40</b>/round trip/person (for two together or long term rider). </p>
                <p className="u-text-left"> 2. Resercation is needed to keep your spot. $5/person reservation fee pay at the time of reservation. (Then $20 Cash at end of the trip).</p>
                <p className="u-text-left"> 3. Long term rider who take my car every/the most time can have a discount as mentioned above. Message me and <b>DO NOT</b> place your reservation here!!</p>  
                <p className="u-text-left"> 4. Pick up / leaving time may vary based on the time I off work and # of people I am going to take.</p>              
                <p className="u-text-left"> 5. <b>No</b> last minute cancelations. Please respect your place. The reservation fee will not refunded if you cancel your trip <i>right before</i> I leave.</p>
                <p className="u-text-left"> 6. Cancelation is allowed <b>6</b> hours before leaving time (around 12:00PM the day of the trip). You get fully refund ($5/person) if you cancel your trip before 12:00PM.</p>
                <p className="u-text-left"> 7. After canceled the trip, the space will be available to public and you may not able to book it again.</p>
                <p className="u-text-left"> 8. I'll update this site for <i>"this week"</i> trip only by 12:00PM Tuesday every week. I may not go to Kingston every week but I'll post here if I do it.</p>
                <p className="u-text-left"> Notes: The site will use Stripe to handle the payment. Refund will be placed on the Monday the week after the trip and will be credit your card 5-7 business days.</p>
                <p className="u-text-left"> Notes: The site will automaticlly update the number of available spot once payment is received. You DO NOT need to ask me if there is spot</p>
                <p className="u-text-left"><b>Notes: NO ABUSE, NO FAKE CREDIT CARD AND NO FRAUD. YOU IP ADDRESS AND INFORMATION WILL BE RECORDED AND MAY USED TO THE INVIESTIGATION AS POLICE NEEDED. (If things happened and, If it's necessary)</b></p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="100%">
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
                  <td>18:00 to 19:00</td>
                  <td>Downtown, Fairview Mall, STC</td>
                  <td><Button type="primary">Deposit</Button></td>
                </tr>
                <tr>
                  <td className="u-text-center"><b>3</b></td>
                  <td>Kingston to Toronto</td>
                  <td>February 29, 2017</td>
                  <td>18:00 to 20:00</td>
                  <td>Anywhere in Kingston</td>
                  <td><Button type="primary">Deposit</Button></td>
                </tr>
              </tbody>
            </Table>
          </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default IndexPage;
