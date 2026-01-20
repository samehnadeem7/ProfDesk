import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'default'
    fullWidth?: boolean
}

export default function Button({
    children,
    variant = 'default',
    fullWidth = false,
    className = '',
    ...props
}: ButtonProps) {
    const classes = [
        'btn',
        variant === 'primary' ? 'btn-primary' : '',
        fullWidth ? 'btn-block' : '',
        className
    ].filter(Boolean).join(' ')

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    )
}
