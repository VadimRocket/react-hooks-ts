/*Purpose: to catch the moment of a click outside a certain block. For example, when you want to close a modal window by clicking anywhere outside it. */
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

interface IType {
    ref: any;
    isShow: boolean;
    setIsShow: Dispatch<SetStateAction<boolean>>;
}

export const useOutside = (initIsVisible: boolean): IType => {

    const [isShow, setIsShow] = useState<boolean>(initIsVisible);
    const ref = useRef<HTMLElement | null>(null);

    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsShow(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });
    return { ref, isShow, setIsShow };
};