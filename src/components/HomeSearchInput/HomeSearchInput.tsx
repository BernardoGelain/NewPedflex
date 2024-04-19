import React from 'react';
import { SearchInput } from './HomeSeachInput.styles';

export default function HomeSearchInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return <SearchInput {...props} />;
}
