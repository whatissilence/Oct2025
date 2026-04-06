import { useLocation } from 'react-router';

export default function Contacts() {

  const location = useLocation();
  const searchParamsData = new URLSearchParams(location.search)
  console.log('id from searchParams', searchParamsData.get('id'));

  return (
    <div className="contacts">
      Contacts! Write us!
    </div>
  );
}
