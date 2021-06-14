import InputMask from "react-input-mask";

export const InputPhone = ({ onChange, value }) => {
  return (
    <InputMask
      onChange={onChange}
      value={value}
      mask="(99) 9 9999 - 9999"
      placeholder="Telefone"
    />
  );
};

export const InputName = ({ onChange, value }) => {
  return <InputMask onChange={onChange} value={value} placeholder="Nome" />;
};

export const InputHunch = ({ onChange, value }) => {
  return (
    <InputMask
      onChange={onChange}
      value={value}
      mask="99 - 99 - 99 - 99 - 99 - 99 - 99 - 99 - 99 - 99"
      placeholder="Informe os 5 números"
    />
  );
};
