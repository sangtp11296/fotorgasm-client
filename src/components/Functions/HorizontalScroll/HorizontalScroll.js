import React, {useRef, useEffect} from 'react'

export const HorizontalScroll = () => {
    const elRef = useRef()
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = e => {
                if(e.deltaY == 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY,
                    behavior: "smooth"
                });
                // el.scrollBy(e.deltaY, 0)
            };
            el.addEventListener('wheel', onWheel);
            return () => el.removeEventListener('wheel', onWheel);
        }
    },[])
  return elRef;
}
