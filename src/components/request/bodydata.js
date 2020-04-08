import React from 'react';
import styled from 'styled-components';
import { colors } from 'css/vars';
import { AddIcon, DeleteIcon } from 'components/icons';
import { Row, Column } from 'components/grid';
import Input from 'components/input';
import withTargetValue from 'utils/with-target-value';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0;
  height: 2rem;
  width: 100%;

  &:hover {
    background-color: #e5e5e5;
  }
`;

const AddButton = styled(Button)`
  margin-top: 0.5rem;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BodyData = ({
  bodydata,
  addBodyData,
  updateBodyData,
  removeBodyData,
  showBodyData,
}) =>
  showBodyData && (
    <BodyContainer>
      {bodydata.map(({ id, key, value }) => (
        <Row key={id}>
          <Column>
            <Input
              label="KEY"
              value={key}
              onChange={withTargetValue((v) =>
                updateBodyData({ id, value, key: v }),
              )}
            />
          </Column>
          <Column>
            <Input
              label="VALUE"
              value={value}
              onChange={withTargetValue((v) =>
                updateBodyData({ id, key, value: v }),
              )}
            />
          </Column>
          <Column>
            <Button onClick={() => removeBodyData(id)}>
              <DeleteIcon fill={colors.grey} />
            </Button>
          </Column>
        </Row>
      ))}
      <Row>
        <Column>
          <AddButton onClick={addBodyData}>
            <AddIcon fill={colors.grey} />
          </AddButton>
        </Column>
      </Row>
    </BodyContainer>
  );

export default BodyData;
