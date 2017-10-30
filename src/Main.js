import React from 'react';
import { Accordion, Col, Grid, Panel, PanelGroup, Row } from 'react-bootstrap';
import projects from './projects';

const Header = () => (
  <Grid style={{marginBottom: '100px'}}>
    <Row>
      <Col md={6} className="text-center">
        <img className="rounded-circle" src="https://dummyimage.com/140x140/eba925/fff.png&amp;text=%20IoT%20" alt="IoT" width="140" height="140"/>
        <PanelGroup>
          {projects["IoT"].map((p, i) => (
            <Panel key={i} header={p.title}>
              {p.description}
            </Panel>
          ))}
        </PanelGroup>
      </Col>
      <Col md={6} className="text-center">
        <img className="rounded-circle" src="https://dummyimage.com/140x140/eba925/fff.png&amp;text=Spark" alt="Spark" width="140" height="140"/>
        <Accordion>
          {projects["Spark"].map((p, i) => (
            <Panel header={p.title} key={i} eventKey={i + 1}>
              {p.description}
            </Panel>
          ))}
        </Accordion>
      </Col>
    </Row>
    <Row>
      <Col md={6} className="text-center">
        <img className="rounded-circle" src="https://dummyimage.com/140x140/eba925/fff.png&amp;text=Ansible" alt="Ansible" width="140" height="140"/>
        <Accordion>
          {projects["Ansible"].map((p, i) => (
            <Panel header={p.title} key={i} eventKey={i + 1}>
              {p.description}
            </Panel>
          ))}
        </Accordion>
      </Col>
      <Col md={6} className="text-center">
        <img className="rounded-circle" src="https://dummyimage.com/140x140/eba925/fff.png&amp;text=VRO%2FVRA" alt="VRO/VRA" width="140" height="140"/>
        <PanelGroup>
          {projects["VRO_VRA"].map((p, i) => (
            <Panel key={i} header={p.title}>
              {p.description}
            </Panel>
          ))}
        </PanelGroup>
      </Col>
    </Row>
  </Grid>
);

export default Header;