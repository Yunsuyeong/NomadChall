import { useState } from "react";

interface IuseMutation<T> {
    loading: boolean;
    data?: T;
    error: any;
}

type IuseMutationResult<T> = [(data: any) => void, IuseMutation<T>];

export default function useMutation<T = any>(
    url: string
): IuseMutationResult<T> {
    const [state, setState] = useState<IuseMutation<T>>({
        loading: false,
        data: undefined,
        error: undefined,
    });
    function mutation(data: any) {
        setState((prev) => ({ ...prev, loading: true }));
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json().catch(() => {}))
            .then((data) => setState((prev) => ({ ...prev, data })))
            .catch((error) => setState((prev) => ({ ...prev, error })))
            .finally(() => setState((prev) => ({ ...prev, loading: false })));
    }
    return [mutation, { ...state }];
}
