import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import "../global.css";
import useUser from "./../lib/useUser";

export default function App({ Component, pageProps }: any) {
    const { pathname } = useRouter();
    useUser(pathname);
    return (
        <SWRConfig
            value={{
                fetcher: (url: string) =>
                    fetch(url).then((response) => response.json()),
            }}
        >
            <Component {...pageProps} />
        </SWRConfig>
    );
}
