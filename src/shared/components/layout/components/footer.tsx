/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export function Footer() {
    return (
        <footer css={footerCss}>
            <p css={css`text-align: center;`} className="copyright">&copy; suiu.</p>
        </footer>
    );
}

const footerCss = css`
  position: sticky;
  top: 100vh;
  top: 100dvh;
  padding: 20px;
  height:100px;
`