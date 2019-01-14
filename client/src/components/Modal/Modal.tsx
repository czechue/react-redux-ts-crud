import React, { ReactPortal } from 'react';
import ReactDOM from 'react-dom';

export const Modal = (props: any): ReactPortal => {
    return ReactDOM.createPortal(
        <div
            onClick={props.onDismiss}
            className="ui dimmer modals visible active"
        >
            <div
                onClick={e => e.stopPropagation()}
                className="ui standard modal visible active"
            >
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector('#modal') as HTMLElement
    );
};
