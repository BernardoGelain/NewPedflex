import {
  LoaderContainer,
  LoaderContent,
  VeplexDescription,
  VeplexName,
} from './Loader.styles';

export default function Loader() {
  return (
    <LoaderContainer>
      <LoaderContent>
        <iframe
          style={{ marginLeft: '-90px', border: 'none' }}
          src="https://lottie.host/embed/a499d1fa-0b46-4c74-96a9-29e01e6d6b61/p116cyVcUI.json"
        />

        {/* <VeplexName>eplex</VeplexName> */}
      </LoaderContent>
      {/* <VeplexDescription>sistemas de informação</VeplexDescription> */}
    </LoaderContainer>
  );
}
