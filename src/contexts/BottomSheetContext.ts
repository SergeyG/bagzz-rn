import React from 'react';
import {BottomSheetProps} from '@gorhom/bottom-sheet';

export interface BottomSheetContextValue {
  expand: (options: BottomSheetProps) => void;
  collapse: () => void;
}

export const BottomSheetContext = React.createContext<
  BottomSheetContextValue | undefined
>(undefined);
