export interface IPropsScreen {
    init(): void;
    destroy(): void;
    contextHolder: React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>;
}