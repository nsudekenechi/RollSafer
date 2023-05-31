import DatePicker from "react-datepicker";
export const DateInput = ({ From, Until, DateInput, type }) => {
  return type == "from" ? (
    <>
      <DatePicker
        selected={From.From.date}
        onChange={(date) => {
          From.setFrom((prev) => ({ ...prev, date }));
          //Updating until whenever from's date > until's date
          if (
            date.getDate() > Until.Until.date.getDate() ||
            date.getMonth() > Until.Until.date.getMonth()
          ) {
            Until.setUntil((prev) => ({ ...prev, date }));
          }
        }}
        customInput={<DateInput />}
        selectsEnd
        startDate={From.From.date}
        endDate={Until.Until.date}
        minDate={new Date()}
      />
      <DatePicker
        selected={From.From.time}
        onChange={(time) => From.setFrom((prev) => ({ ...prev, time }))}
        customInput={<DateInput />}
        showTimeSelect
        showTimeSelectOnly
        dateFormat="h:mm aa"
      />
    </>
  ) : (
    <>
      <DatePicker
        selected={Until.Until.date}
        onChange={(date) => Until.setUntil((prev) => ({ ...prev, date }))}
        customInput={<DateInput />}
        minDate={new Date()}
      />
      <DatePicker
        selected={Until.Until.time}
        onChange={(time) => Until.setUntil((prev) => ({ ...prev, time }))}
        customInput={<DateInput />}
        showTimeSelect
        showTimeSelectOnly
        dateFormat="h:mm aa"
      />
    </>
  );
};
