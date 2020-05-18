import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  .ant-card-body {
    .ant-card-meta {
      position: absolute;
      padding: 0;
      width: 101%;
      bottom: 53.7%;
      background: #57595d;
      opacity: 0.9;
      margin: 0 -17px;
      @media (max-width: 425px) {
        width: 102%;
        bottom: 66.7%;
        margin: 0 -17px;
      }

      div {
        color: white;
      }
    }
  }
  .card-list {
    border: 0;
    background: #7a7b7c;
    margin: 0;
  }
  &.imageWithContent {
    .ant-card {
      background: #7a7b7c;
      .ant-card-body {
        background: #7a7b7c;
        padding: 24px 16px;
        border-top: 0;
      }
    }
  }
`;
