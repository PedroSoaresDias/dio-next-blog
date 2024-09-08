import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';

interface CustomLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>, LinkProps {}

export default function CustomLink({ as, href, ...otherProps }: CustomLinkProps) {
  return (
    <Link as={as} href={href} {...otherProps} />
  );
}