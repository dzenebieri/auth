import styled from 'styled-components';
import PropTypes from 'prop-types';

const Error = styled.span`
  color: red;
  right: 8px;
  padding: 16px;
  font-size: 11px;
  position: absolute;

  @media (min-width: 640px) {
    right: 36px;
    font-size: 12px;
  }
`;

function ErrorIN({ error, children }) {
  return (
    <div>
      {children}
      {error && <Error>{error}</Error>}
    </div>
  );
}

export default ErrorIN;

ErrorIN.propTypes = {
  error: PropTypes.string,
  children: PropTypes.node,
};
