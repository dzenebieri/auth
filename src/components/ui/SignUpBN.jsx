import PropTypes from 'prop-types';

export default function SignUpBN({ onClick, disabled, children, type }) {
  const styles = {
    primary:
      'text-[rgb(62,207,142)] hover:underline font-semibold absolute bottom-5 justify-center flex w-full text-lg',
    secondary:
      'h-[52px] w-[364px] rounded-md border border-neutral-800 px-4 bg-[#00a400] text-white text-lg font-semibold hover:bg-gradient-to-t from-[#79bc64] to-[#578843]',
  };

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

SignUpBN.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.oneOf(['primary', 'secondary']),
};
