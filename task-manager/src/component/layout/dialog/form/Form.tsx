import React from "react";
import { useForm } from "react-hook-form";
import { validationSchema } from "../../../utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { RhfTextField } from "./conceal/RhfTextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { getDate } from "../../../globalState/hooks/CreateState";
import { myStyle } from "../../../theme/Theme";
import { TimePicker } from "@mui/x-date-pickers";

type NewPostInput = {
  title: string;
  name: string;
  date: string;
  time: string;
  other: string;
};
export const Form = () => {
  const { date, year, month, day } = getDate();
  const {
    control,
    handleSubmit,
    setError,
    formState: { isValid },
  } = useForm<NewPostInput>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });
  const onSubmit = (data: NewPostInput) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>タイトル</p>
      <RhfTextField
        placeholder="例）コーディング"
        name="title"
        control={control}
      />
      <p>名前</p>
      <RhfTextField placeholder="例）山田 太郎" name="name" control={control} />
      <p>制作日</p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            sx={myStyle}
            disabled
            slotProps={{
              textField: {
                placeholder: `${year}/${month}/${day}`,
                size: "small",
              },
            }}
          />
        </DemoContainer>
        <div>
          <div>
            <p>期限日付</p>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                sx={myStyle}
                slotProps={{
                  textField: {
                    placeholder: "例）日付を入力",
                    size: "small",
                    name: "date",
                  },
                }}
              />
            </DemoContainer>
          </div>
          <div>
            <p>期限時間</p>
            <DemoContainer components={["DatePicker"]}>
              <TimePicker
                sx={myStyle}
                views={["minutes", "seconds"]}
                format="mm:ss"
                slotProps={{
                  textField: {
                    placeholder: "--:--",
                    size: "small",
                    name: "time",
                  },
                }}
              />
            </DemoContainer>
          </div>
        </div>
      </LocalizationProvider>
      <p>名前</p>
      <RhfTextField
        placeholder="例）備考を入力"
        name="other"
        control={control}
      />
      <button type="submit">ボタン</button>
    </form>
  );
};
