export type CounterProps = {
    count: number;
};
export function Counter({ count }: CounterProps) {
    return <p>{count}</p>;
}
