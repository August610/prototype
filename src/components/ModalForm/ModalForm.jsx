import React from 'react';
import "./styles.css";
import  cn  from 'classnames';

export function ModalForm({active, setActive, children}) {
    return (
        <div 
            className={cn('modall',
            {
                'modall_active': active
            })} 
            onClick={()=> 
            setActive(false)
        }>
            <div className="modall__content" onClick={(e)=> e.stopPropagation()}>
               {children}
            </div>
        </div>
    )

}