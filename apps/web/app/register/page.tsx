// 'use client';

// import { Exo_2 } from 'next/font/google';
// import RegisterForm from '../../components/auth/RegistrationForm';

// const exo2 = Exo_2({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700', '800'],
// });

// export default function RegisterPage() {
//   return (
//     <main
//       className={`${exo2.className} min-h-screen bg-[#F4F7FA]`}
//     >
//       <RegisterForm />
//     </main>
//   );
// }

'use client';

import RegisterStepper from '../../components/auth/RegisterStepper';
import { Toaster } from 'react-hot-toast';

export default function RegisterPage() {
  return (
    <>
      <Toaster position="top-right" />
      <RegisterStepper />
    </>
  );
}