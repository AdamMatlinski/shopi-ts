import styled from 'styled-components';

export const BookItemContainer = styled.li`
  cursor: pointer;
  transition: ${({ theme }) => theme.effect.transitionHover};
  margin-bottom: 20px;
  padding: 10px;

  &:hover {
    -webkit-box-shadow: 0px 0px 21px 6px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 0px 21px 6px rgba(0, 0, 0, 0.25);
  }

  @media ${({ theme }) => theme.mediaQueries.md} {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const BookItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 20px 76px 20px;
  position: relative;
  transition: ${({ theme }) => theme.effect.transitionHover};

  @media ${({ theme }) => theme.mediaQueries.sm} {
    padding: 10px 6px 66px 6px;
  }

  @media ${({ theme }) => theme.mediaQueries.xs} {
    padding-right: 0;
    padding-left: 0;
  }
`;

export const StyledTopLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const StyledBookImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 280px;
  }
`;

export const StyledBookTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 14px;

  h5 {
    padding: 0 20px;
    text-align: center;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.lg};
    margin: 0;

    @media ${({ theme }) => theme.mediaQueries.lg} {
      padding: 0;
    }
  }
`;

export const StyledBookAuthor = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6px;
`;

export const StyledBookGenre = styled.div`
  display: flex;
  justify-content: center;
  margin: 6px 0 10px 0;
`;

export const StyledBookPrice = styled.div`
  span {
    margin-right: 3px;
    font-weight: 900;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

type StyledBookLabelProps = {
  inStock?: boolean;
};

export const StyledBookLabel = styled.div<StyledBookLabelProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    color: ${({ inStock, theme }) => (inStock ? theme.colors.green : theme.colors.red)};
    font-size: ${({ theme }) => theme.fontSize.xs};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 900;
  }

  button {
    position: absolute;
    bottom: 20px;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 0;
    padding: 13px 26px;

    &:hover {
      background: transparent;
      color: ${({ theme }) => theme.colors.black};
    }

    @media ${({ theme }) => theme.mediaQueries.md} {
      width: 50%;
    }

    @media ${({ theme }) => theme.mediaQueries.sm} {
      width: 80%;
    }

    @media ${({ theme }) => theme.mediaQueries.xs} {
      width: 100%;
    }
  }
`;
