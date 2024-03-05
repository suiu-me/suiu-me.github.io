/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


export function MailIcon() {
    return (
        <svg css={iconCss} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path css={pathCss} d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
        </svg>
    );
}

export function LocationPinIcon() {
    return (
        <svg css={iconCss} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path css={pathCss} d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path>
            <path css={pathCss} d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path>
        </svg>
    );
}


const iconCss = css`
    display: inline-flex;
    vertical-align: middle;
    padding-right: 0.5rem;
    width: clamp(2rem, 0.5rem + 2vw, 2.5rem);
    max-width: 100%;
    height: auto;
    flex-shrink: 0;
`

const pathCss = css`
    fill:#005A79;
`