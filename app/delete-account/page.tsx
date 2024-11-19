import React, { FC } from 'react';

const deleteaccount: FC = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      <h1></h1>
      <p><strong>Hesap Silme Yönergesi / Account Deletion Instructions </strong></p>

      <p> Liman Finance hesabınızı silmek için, hesap kaydı sırasında kullandığınız e-posta adresi üzerinden, info@liman.finance adresine, *Hesabımı silmek istiyorum*
          konulu bir e-posta göndermeniz gerekmektedir.

          Talebiniz alındıktan sonra en kısa sürede işleme alınacaktır.
        
      <hr />

      <p>
        To delete your Liman Finance account, you need to send an email with the subject <em>*I want to delete my account*</em> to <strong>info@liman.finance</strong> from the email address you used during registration.
      </p>
      
      <p>
        Your request will be processed as soon as possible after it is received.
      </p>
      </p>
    </div>
  );
};

export default deleteaccount;
