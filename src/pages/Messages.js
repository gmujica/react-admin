import React from 'react'
import CardContainer from '../components/CardContainer'

export const Messages = () => {
    return (
      <div className='messages'>
        <CardContainer title={'Messages'} />
      </div>
    );
  };

export const Message1 = () => {
    return (
        <div className='messages'>
            <CardContainer title={'/messages/message1'} />
        </div>
    )
}

export const Message2 = () => {
    return (
        <div className='messages'>
            <CardContainer title={'/messages/message2'} />
        </div>
    )
}



