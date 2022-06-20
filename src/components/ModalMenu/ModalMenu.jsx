import React from 'react';
import "./styles.css";
import  cn  from 'classnames';

export function ModalMenu({active, setActive, children}) {
    return (
        <div 
            className={cn('modal',
            {
                'modal_active': active
            })} 
            onClick={()=> 
            setActive(false)
        }>
            <div className="modal__content" onClick={(e)=> e.stopPropagation()}>
               {children}
            </div>
        </div>
    )

}