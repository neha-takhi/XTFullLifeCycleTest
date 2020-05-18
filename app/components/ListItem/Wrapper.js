import styled from 'styled-components';

const Wrapper = styled.li`
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  position: relative;
  border-top: 1px solid #6967679e;
  .key {
    color: #dbd8d8;
  }
  .value {
    color: #c0c015;
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:first-child {
    border-top: none;
  }
`;

export default Wrapper;
