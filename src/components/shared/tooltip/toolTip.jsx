import * as Tooltip from "@radix-ui/react-tooltip";

export const Tooltip = ({ children, msj }) => {
    return (
        <Tooltip.Provider delayDuration={300}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    {children}
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        className="bg-gray-900 text-white px-3 py-1 rounded-md text-sm shadow-md"
                        side="top"
                        align="center"
                    >
                        {msj}
                        <Tooltip.Arrow className="fill-gray-900" />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}