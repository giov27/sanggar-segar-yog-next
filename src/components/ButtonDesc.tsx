import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

interface IButtonDescProps {
  btnText: String;
  children: React.ReactNode;
  extendClass?: String | undefined;
}

const Wrapper = styled.div`
  border-radius: 8px;
  background: rgba(241, 241, 241, 0.4);
  padding: 6px 10px;
  display: flex;
`;

const Btn = styled.button`
  border-radius: 8px;
  background: #f1f1f1;
  padding: 6px 6px;
  color: #040b4a;
  font-size: 13px;
  font-weight: 600;
  line-height: normal;
  display: block;
  width: 100%;
  border: 2px solid #f1f1f1;
  &:hover {
    color: #fff;
    border: 2px solid #040b4a;
    background-color: #040b4a;
  }
`;

const Txt = styled.p`
  margin: 0;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 10px;
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ButtonDesc = (props: IButtonDescProps) => {
  const { btnText, children, extendClass = '' } = props;
  return (
    <React.Fragment>
      <div className={`${extendClass}`}>
        <Wrapper className="align-items-center">
          <Col>
            <Btn>{btnText}</Btn>
          </Col>
          <Col xs={8}>
            <Txt>{children}</Txt>
          </Col>
        </Wrapper>
      </div>
    </React.Fragment>
  );
};

export default ButtonDesc;
