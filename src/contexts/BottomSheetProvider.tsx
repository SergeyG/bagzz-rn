import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFooter,
  BottomSheetProps,
} from '@gorhom/bottom-sheet';
import {
  BottomSheetContext,
  BottomSheetContextValue,
} from './BottomSheetContext';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {BottomSheetDefaultBackdropProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import {BottomSheetDefaultFooterProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetFooter/types';

const DEFAULT_OPTIONS: BottomSheetProps = {
  snapPoints: ['25%', '50%'],
  index: -1,
  children: () => null,
};
export const BottomSheetProvider = ({children}: any) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [options, setOptions] = useState<BottomSheetProps | null>({
    ...DEFAULT_OPTIONS,
  });

  useEffect(() => {
    if (options) {
      bottomSheetRef.current?.snapToIndex(1);
    } else {
      bottomSheetRef.current?.close();
    }
  }, [options]);

  const collapseBottomSheet = useCallback(() => setOptions(null), []);

  const snapPoints = useMemo(
    () => options?.snapPoints ?? DEFAULT_OPTIONS.snapPoints,
    [options],
  );
  const handleBuyPress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  const renderBackdrop = useCallback(
    (props: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        opacity={0.1}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );
  const renderFooter = useCallback(
    (props: JSX.IntrinsicAttributes & BottomSheetDefaultFooterProps) => (
      <BottomSheetFooter {...props} bottomInset={10}>
        <Pressable onPress={handleBuyPress} style={styles.buttonBuy}>
          <View>
            <Text style={styles.buttonText}>proceed to buy</Text>
          </View>
        </Pressable>
      </BottomSheetFooter>
    ),
    [handleBuyPress],
  );

  const bottomSheetContext: BottomSheetContextValue = useMemo(
    () => ({
      expand: setOptions,
      collapse: collapseBottomSheet,
    }),
    [collapseBottomSheet],
  );

  return (
    <BottomSheetContext.Provider value={bottomSheetContext}>
      {children}
      {options && (
        <BottomSheet
          bottomInset={60}
          index={-1}
          snapPoints={snapPoints}
          ref={bottomSheetRef}
          backgroundStyle={styles.bottomSheet}
          backdropComponent={renderBackdrop}
          footerComponent={renderFooter}
          onChange={() => null}>
          {options.children}
        </BottomSheet>
      )}
    </BottomSheetContext.Provider>
  );
};

export const useBottomSheet = () => {
  const context = useContext(BottomSheetContext);
  if (context === undefined) {
    throw new Error('useBottomSheet must be used within a BottomSheetContext');
  }
  return context;
};

const styles = StyleSheet.create({
  bottomSheet: {
    opacity: 0.7,
  },
  buttonBuy: {
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
