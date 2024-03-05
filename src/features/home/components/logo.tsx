/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import logo from '@/assets/suiu-logo.svg';

export function Logo() {
    return (
        <svg css={logoCss} id="_x32_" version="1.1" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <g transform="matrix(.36328 0 0 .36328 35 14)">
                <path css={pathCss} d="m253.25 57.99h-9.7e-4s-101.21 64.671-101.21 144.14c0 27.948 11.328 53.249 29.642 71.564 12.592 12.592 28.485 21.881 46.271 26.457 8.0843 2.0801 16.56 3.1866 25.293 3.1866h9.5e-4c8.7332 0 17.208-1.106 25.293-3.1866 17.785-4.5762 33.679-13.865 46.271-26.457 18.314-18.315 29.643-43.616 29.643-71.564 4.7e-4 -79.464-101.21-144.14-101.21-144.14zm66.945 169.28c-6.2294-1.2353-10.278-7.287-9.0427-13.518 0.75424-3.7961 1.1362-7.7082 1.1362-11.63 0-8.2453-2.0423-17.164-6.0665-26.509-3.7228-8.6349-9.1606-17.698-16.163-26.937-2.6394-3.4837-5.5332-7.0306-8.5971-10.542-4.1761-4.7861-3.682-12.051 1.1026-16.227 4.7918-4.1742 12.054-3.6782 16.227 1.1026 3.4104 3.9082 6.641 7.8692 9.5986 11.774 8.1217 10.716 14.499 21.389 18.954 31.727 5.2729 12.236 7.9458 24.218 7.9458 35.611 0 5.421-0.52998 10.84-1.5741 16.107-1.0878 5.4732-5.8925 9.2636-11.269 9.2636-0.74371 0-1.496-0.07092-2.2522-0.22235z" fill="#005A79" stroke-width=".47918" />
                <g fill="#333" stroke-width="2.0062" aria-label="suiu">
                    <path d="m82.09 444.1q9.2444 0 17.189 1.8778 8.0888 1.8778 13.867 4.4778 5.9222 2.6 8.3777 4.6222l-9.9666 15.889q-2.8889-2.6-10.4-5.7777-7.5111-3.3222-16.755-3.3222-10.111 0-17.189 4.0444-7.0777 3.9-7.0777 11.411t7.2222 11.989q7.3666 4.3333 19.644 7.2222 9.8222 2.3111 18.344 6.2111 8.6666 3.9 14.011 10.833 5.3444 6.7888 5.3444 18.2 0 10.4-4.3333 17.767-4.3333 7.2222-11.7 11.7-7.3666 4.3333-16.467 6.3555-9.0999 2.0222-18.489 2.0222-10.978 0-19.789-2.3111-8.8111-2.1667-14.878-5.2-5.9222-3.1778-8.6666-5.4888l9.9666-17.911q3.7555 3.6111 12.278 7.6555 8.6666 4.0444 19.644 4.0444 12.133 0 19.644-5.0555 7.5111-5.2 7.5111-13.433 0-6.2111-3.6111-9.9666t-9.6777-6.0666q-6.0666-2.3111-13.289-4.0444-6.9333-1.5889-13.578-4.1889-6.5-2.6-11.989-6.6444-5.3444-4.1889-8.5222-10.111-3.1778-6.0666-3.1778-14.155 0-10.255 6.5-17.478 6.5-7.3666 17.044-11.267 10.544-3.9 22.967-3.9z" />
                    <path d="m177.42 507.37q0 18.633 7.9444 29.755 8.0888 10.978 24.7 10.978 16.755 0 24.7-10.978 7.9444-11.122 7.9444-29.755v-59.8h24.844v63.266q0 17.333-6.7888 30.622-6.6444 13.289-19.5 20.8-12.711 7.3666-31.2 7.3666-18.344 0-31.2-7.3666-12.711-7.5111-19.5-20.8-6.6444-13.289-6.6444-30.622v-63.266h24.7z" />
                    <path d="m304.39 566.15v-118.59h25.133v118.59zm12.855-159.18q-6.7888 0-11.7-4.7666-4.7666-4.9111-4.7666-11.7 0-6.7888 4.7666-11.7 4.9111-4.9111 11.7-4.9111 4.4777 0 8.2333 2.3111 3.9 2.3111 6.2111 6.0666 2.3111 3.6111 2.3111 8.2333 0 6.7888-4.9111 11.7-4.9111 4.7666-11.844 4.7666z" />
                    <path d="m391.49 507.37q0 18.633 7.9444 29.755 8.0888 10.978 24.7 10.978 16.755 0 24.7-10.978 7.9444-11.122 7.9444-29.755v-59.8h24.844v63.266q0 17.333-6.7888 30.622-6.6444 13.289-19.5 20.8-12.711 7.3666-31.2 7.3666-18.344 0-31.2-7.3666-12.711-7.5111-19.5-20.8-6.6444-13.289-6.6444-30.622v-63.266h24.7z" />
                </g>
            </g>
        </svg>
    );
}

const logoCss = css`
    width: clamp(18.75rem, 15.341rem + 17.05vw, 28.125rem);
`

const pathCss = css`
    fill:#005A79;
`

