import { FormHelperText, TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField";
import type { ChangeEventHandler, FocusEventHandler } from "react";
import { myStyle } from "../../../../theme/Theme";

export type TextProps = {
  error?: string;
  className?: string;
  placeholder?: string;
};

export const MyTextField = (
  props: TextProps & {
    inputRef: TextFieldProps["ref"];
    value: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    onBlur: FocusEventHandler<HTMLTextAreaElement>;
  }
) => {
  return (
    <>
      <TextField
        sx={myStyle}
        placeholder={props.placeholder}
        className={props.className}
        ref={props.inputRef}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        fullWidth
        size="small"
      />
      {!!props.error && <FormHelperText error>{props.error}</FormHelperText>}
    </>
  );
};
