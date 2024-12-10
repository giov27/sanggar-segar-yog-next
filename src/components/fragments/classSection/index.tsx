import { Accordion } from 'react-bootstrap';
import ClassItems from '@/lib/classItemsData.json';
import ClassCard from './ClassCard';

function ClassSection() {
  return (
    <Accordion defaultActiveKey="0" className='mb-3'>
      {
        ClassItems.classes.map((v: any, i: number) => {
          return (
            <Accordion.Item key={`${i}_${v.name}`} eventKey={`${i}`}>
              <Accordion.Header>{v.name}</Accordion.Header>
              <Accordion.Body>
                {
                  v.items &&
                  v.items.map((classItem: any, j: number) => {
                    return (
                      <ClassCard
                        key={`${classItem.name}_${j}`}
                        name={classItem.name}
                        price={classItem.price}
                        image_url={classItem.image_url}
                        desc={classItem.desc}
                      />
                    )
                  })
                }
              </Accordion.Body>
            </Accordion.Item>
          )
        })
      }
    </Accordion>
  );
}

export default ClassSection;