import React from 'react';
import { Accordion, Col, Grid, Panel, PanelGroup, Row } from 'react-bootstrap';
import projects from './projects';

const Header = () => (
  <Grid style={{marginBottom: '100px'}}>
    <section>
      <Row>
        <article>
          <Col md={6} className="text-center">
            <img className="rounded-circle" src="https://dummyimage.com/140x140/eba925/fff.png&amp;text=%20IoT" alt="%20IoT" width="140" height="140"/>
            <PanelGroup>
              {projects["IoT"].map((p, i) => (
                <Panel key={i} header={p.title}>
                  {p.description}
                  <hr/>
                  <p><a href={p.link} className="btn btn-warning" target="_blank">View Demo</a></p>
                </Panel>
              ))}
            </PanelGroup>
          </Col>
        </article>
        <article>
          <Col md={6} className="text-center">
            <img className="rounded-circle" src="https://dummyimage.com/140x140/eba925/fff.png&amp;text=Spark" alt="Spark" width="140" height="140"/>
            <Accordion>
              {projects["Spark"].map((p, i) => (
                <Panel header={p.title} key={i} eventKey={i}>
                  {p.description}
                </Panel>
              ))}
            </Accordion>
          </Col>
        </article>
      </Row>
    </section>
    <section>
      <Row>
        <article>
          <Col md={6} mdPush={6} className="text-center">
            <img className="rounded-circle" src="https://dummyimage.com/140x140/eba925/fff.png&amp;text=%20VRO%2FVRA" alt="VRO/VRA" width="140" height="140"/>
            <PanelGroup>
              {projects["VRO_VRA"].map((p, i) => (
                <Panel key={i} header={p.title}>
                  {p.description}
                </Panel>
              ))}
            </PanelGroup>
          </Col>
        </article>
        <article>
          <Col md={6} mdPull={6} className="text-center">
            <img className="rounded-circle" src="https://dummyimage.com/140x140/eba925/fff.png&amp;text=%20Ansible" alt="Ansible" width="140" height="140"/>
            <Accordion>
              {projects["Ansible"].map((p, i) => (
                <Panel header={p.title} key={i} eventKey={i}>
                  {p.description}
                </Panel>
              ))}
            </Accordion>
          </Col>
        </article>
      </Row>
    </section>
  </Grid>
);

export default Header;
