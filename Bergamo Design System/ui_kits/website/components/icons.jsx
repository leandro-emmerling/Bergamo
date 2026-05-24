/* Tiny Lucide-style icon set, inlined as React components. */
const I = ({ size = 20, stroke = 1.75, children, ...rest }) => (
  <svg
    width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={stroke}
    strokeLinecap="round" strokeLinejoin="round" {...rest}
  >{children}</svg>
);

const IconArrowRight = (p) => (<I {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></I>);
const IconExternal   = (p) => (<I {...p}><polyline points="7 17 17 7"/><polyline points="9 7 17 7 17 15"/></I>);
const IconInstagram  = (p) => (<I {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></I>);
const IconPin        = (p) => (<I {...p}><path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></I>);
const IconClock      = (p) => (<I {...p}><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></I>);
const IconMenu       = (p) => (<I {...p}><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></I>);

Object.assign(window, { IconArrowRight, IconExternal, IconInstagram, IconPin, IconClock, IconMenu });
