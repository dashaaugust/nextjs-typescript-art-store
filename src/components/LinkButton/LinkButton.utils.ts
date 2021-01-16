import { LinkProps } from "next/link";
import { LinkButtonTypes } from "./LinkButton.types";

export const isRouterLink = (props: LinkButtonTypes): props is LinkProps => "href" in props;
