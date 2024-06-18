import classNames from "classnames";
import { title } from './../Title/title';

type props = {
    title: string;
    className?: string;
    variant?: 'light' | 'dark';
    onclick?: (title: any) => void;
};

export function Button ({
    title, 
    className, 
    variant = 'dark',
    onclick =
}: props) {

    return (
        <button className={classNames([
            'bg-evergreen-light px-6 py-3 rounded-lg shadow text-white font-medium mt-3',
            variant === 'dark' && 'bg-evergreen'
            variant === 'light' && 'bg-white border-2 border-evergreen-light border-evergreen-light',
        className,
        ])}

        onClick={onclick}
        >
            {title}
        </button>
    );
}