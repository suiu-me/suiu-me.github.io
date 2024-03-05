/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


export function HomeIcon() {
    return (
        <svg css={iconCss} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path css={pathCss} d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></path>
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