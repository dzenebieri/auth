import styled from 'styled-components';
import PropTypes from 'prop-types';

const Error = styled.span`
  color: red;
  right: 36px;
  padding: 16px;
  font-size: 12px;
  position: absolute;
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
