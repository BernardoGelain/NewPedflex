import { useFetchPosts } from '@/services/posts';
import ModalDialog from '@/components/ModalDialog/ModalDialog';
import { useModalDialog } from '@/hooks/useModalDialog';
import { HomePageButton } from '@/components/HomeButton/HomeButton';

export function Teste() {
  const { setModalConfig } = useModalDialog();

  const { postsData } = useFetchPosts();

  return (
    <div>
      {' '}
      <HomePageButton
        title="Abrir modal"
        onClick={() =>
          setModalConfig({
            open: true,
            title: 'Modal exemplo',
          })
        }
      />
      <ul
        style={{
          listStyleType: 'circle',
          listStyle: 'inside',
          paddingLeft: '10px',
        }}
      >
        {postsData?.map(() => (
          <li>{'titulo'}</li>
        ))}
      </ul>
      <ModalDialog>
        <div>div</div>+
      </ModalDialog>
    </div>
  );
}
