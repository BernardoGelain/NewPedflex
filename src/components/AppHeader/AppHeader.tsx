import { useFetchAppHeader } from '@/services/header';

export function AppHeader() {
  const {} = useFetchAppHeader();

  return <div>HEADER</div>;
}
