import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CategoryCardImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const CategoryCardBody = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  background-color: white;
  opacity: 0.9;
  position: absolute;
`;

export const CategoryCardDiv = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  box-shadow: 0.15rem 0.15rem 0.15rem black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${CategoryCardImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${CategoryCardBody} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const Large = styled.div`
  height: 380px;
`;
