import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import './qr_scanner.scss'

export const QrScanner = (props) => {
  const [data, setData] = useState('No result');
  const [vpa, setVPA] =  useState('No VPA');

  return (
   <div>
      <QrReader className='qr_scanner'
      constraints={ { facingMode: "environment" }}
        onResult={(result, error) => {
          if (!!result) {
            const scanned_value = result?.text
            if (scanned_value){
                setData(scanned_value);
                const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+/;
                const result = scanned_value.match(regex);
                setVPA(result)
            }
    
          }

          if (!!error) {
            console.info(error);
          }
        }}
      />
      <p>{data}</p>
      <p>{vpa}</p>
  </div>
  );
};