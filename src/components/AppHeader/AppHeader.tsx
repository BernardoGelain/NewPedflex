import { useFetchAppHeader } from '@/services/header';

export function AppHeader() {
  const { headerData } = useFetchAppHeader();

  return (
    <div>
      <h4>HEADER</h4>
    </div>
  );
}
