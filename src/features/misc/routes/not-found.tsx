/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { DefaultLayout } from "@/shared/components/layout/default-layout";
import { HomeIcon, NotFoundImage } from "../components";

export function NotFound() {
    return (
        <>
            <DefaultLayout>
                <div className="content-center" css={contentCenterCss}>
                    <h1><NotFoundImage /></h1>
                    <p >お探しのページが見つかりませんでした。</p>
                    <p css={css`margin-top:3rem;`}><a href="/"><HomeIcon />トップページに戻る</a></p>
                </div>
            </DefaultLayout>
        </>);
}
const contentCenterCss = css`
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1ch;
    height: calc(100vh - 100px);
`
