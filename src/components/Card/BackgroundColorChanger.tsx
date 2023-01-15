import React, { useEffect } from 'react';

export interface IBackgroundColorChangerProps {
    temperature : number
}

export default function BackgroundColorChanger ({temperature}: IBackgroundColorChangerProps) {

    useEffect(() => {
        if (temperature >= 10) {
            if (temperature >= 30) {
                document.querySelector('body')!.className = 'hotBackground'
            } else {
                document.querySelector('body')!.className = 'neutralBackground'
            }
        } else {
            document.querySelector('body')!.className = 'coldBackground'
        }
    }, [temperature])

  return (
    <div>
      
    </div>
  );
}
