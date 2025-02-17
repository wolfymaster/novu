import React, { ChangeEvent } from 'react';
import { Checkbox as MantineCheckbox } from '@mantine/core';
import useStyles from './Checkbox.styles';

interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Checkbox Component
 *
 */
export function Checkbox({ label = 'Default Checkbox', checked, onChange, disabled = false, ...props }: CheckboxProps) {
  const { classes } = useStyles({ disabled });

  return (
    <MantineCheckbox
      classNames={classes}
      label={label}
      onChange={onChange}
      disabled={disabled}
      size="sm"
      checked={checked}
      {...props}
    />
  );
}
