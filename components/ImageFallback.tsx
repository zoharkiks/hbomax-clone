import React, { useEffect, useState } from 'react'

function ImageFallback({ src, fallbackSrc, classname,...props } :{src: string, fallbackSrc: string,classname:string}) {

    const [state, setState] = useState({ src: src, errored: false })
   

    //update(next img) state onMount 
    useEffect(() => {
       setState({
           src: src,
           errored: false,
       })

    }, [src])

   //update (remove) state onUnMount
   useEffect(() => {
       return () => {
           setState({
               src: null,
               errored: false,
           })
       }
   }, [])

    const onError = () => {
        //1st error
        if (!state.errored) {
            setState({
                src: fallbackSrc,
                errored: true,
            });
        } else if (state.errored && state.src) {
            //2nd error
            //when error on fallbacksrc - remove src
            setState({
                src: null,
                errored: true,
            });
        }

    }

    return (
        state.src && <img
        className={`${classname}`}
            src={state.src}
            onError={onError}
            {...props}
        />
    )
}

export default ImageFallback