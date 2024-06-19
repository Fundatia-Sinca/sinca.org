import clsx from "clsx";

export function Bounded({
  as: Comp = "div",
  yPadding = "base",
  collapsible = true,
  className,
  children,
}) {
  return (
    <Comp
      data-collapsible={collapsible}
      className={clsx(
        "px-6",
        yPadding === "xs" && "py-2 md:py-4",
        yPadding === "sm" && "py-8 md:py-10",
        yPadding === "base" && "py-20 md:py-28",
        yPadding === "lg" && "py-32 md:py-48",
        className,
      )}
    >
      <div className="mx-auto w-full ">{children}</div>
    </Comp>
  );
}
