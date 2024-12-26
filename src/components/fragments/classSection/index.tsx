import { Accordion, Container, Row } from 'react-bootstrap';
import ClassItems from '@/lib/classItemsData.json';
import ClassCard from './ClassCard';
import ClassCardContainer from './ClassCardContainer';

function ClassSection() {
  return (
    <Accordion defaultActiveKey="0" className='mb-3'>
      {
        ClassItems.classes.map((v: any, i: number) => {
          return (
            <Accordion.Item
              key={`${i}_${v.name}`}
              eventKey={`${i}`}
              style={{
                marginBottom: '1em',
                // border: 'unset',
                borderRadius: 'var(--bs-accordion-border-radius)'
              }}
            >
              <Accordion.Header>{v.name}</Accordion.Header>
              <Accordion.Body>
                <ClassCardContainer classItems={v.items}/>
              </Accordion.Body>
            </Accordion.Item>
          )
        })
      }
    </Accordion>
  );
}

export default ClassSection;