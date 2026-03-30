import User from './User.jsx';
import { Suspense } from 'react';
import LoadingComponent from './LoadingComponent.jsx';
import { ErrorBoundary } from 'react-error-boundary';

// Посилання запиту (проміс) ======================================
const fetchUser = fetch(`https://jsonplaceholder.typicode.com/users/1`)
  .then(async response => {
    // await new Promise((resolve) => { setTimeout(resolve, 3000); });

    if (!response.ok) {
      throw new Error('Запит не вдався: ' + response.status);
    }
    return response.json();
  });


// Компонент контейнеру ======================================
export default function UserContainer() {
   return (
     <ErrorBoundary fallback={<p>Something went wrong</p>}>
       <Suspense fallback={<LoadingComponent />}>
        <User fetchUserPromise={fetchUser} />
       </Suspense>
     </ErrorBoundary>
   )
}
