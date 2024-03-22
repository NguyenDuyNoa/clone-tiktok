import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
    to,
    href,
    primary = false,
    outline = false,
    text = true,
    rounded = false,
    leftIcon,
    rightIcon,
    disabled = false,
    small = false,
    large = false,
    children,
    onClick,
    ...passProps
}) => {
    let Comp = 'button';
    let classNames = "min-w-[100px] px-4 py-[6px] ml-2 text-base font-bold rounded select-none";

    if (rounded) {
        classNames += " border rounded-full shadow-md "; //border-span
    }

    if (primary) {
        classNames += " border bg-primary text-white hover:bg-gradient-to-r from-gray-900 via-transparent to-pink-500 border-transparent";
    } else if (outline) {
        classNames += " border border-primary text-primary hover:bg-outline-hover";
    } else if (text) {
        classNames += " border hover:bg-hover";
    } else if (rounded) {
        classNames += " border rounded-full shadow-md border-span";
    }

    if (disabled) {
        classNames += " border bg-primary text-white hover:bg-gradient-to-r from-gray-900 via-transparent to-pink-500 border-transparent pointer-events-none opacity-50";
    }

    if (small) {
        classNames += " min-w-[88px] px-4 py-[2px]";
    } else if (large) {
        classNames += " min-w-[140px] px-4 py-[11px]";
    }

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        delete props.onClick;
    }

    return (
        <Comp className={classNames} {...props}>
            {leftIcon && <span className='mr-2'>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className='ml-2'>{rightIcon}</span>}
        </Comp>
    );
};

export default Button;
