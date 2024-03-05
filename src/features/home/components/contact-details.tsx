/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { LocationPinIcon, MailIcon } from "./icons"


export function ContactDetails() {
    return (
        <ul className='contact-details' css={css`list-style: none;padding:0;`}>
            <li>
                <MailIcon />
                <span>
                    <a href="mailto:&#104;&#101;&#108;&#108;&#111;&#64;&#115;&#117;&#105;&#117;&#46;&#109;&#101;">&#104;&#101;&#108;&#108;&#111;&#64;&#115;&#117;&#105;&#117;&#46;&#109;&#101;</a>
                </span>
            </li>
            <li>
                <LocationPinIcon />
                <span>Hyogo, Japan</span>
            </li>
        </ul>
    );
}