  /** @jsx jsx */  /** @jsxRuntime classic */
import { jsx, css } from '@emotion/core';

  type ButtonProps = {
    /** 버튼 안의 내용 */
    children: React.ReactNode;
    /** 클릭했을 때 호출할 함수 */
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  };

  /** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
  const Button = ({ children, onClick }: ButtonProps) => {
    return (
      <button css={style} onClick={onClick}>
        {children}
      </button>
    );
  };

  const style = css``;

  export default Button;
