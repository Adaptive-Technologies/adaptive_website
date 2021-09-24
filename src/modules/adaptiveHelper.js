export const controlProps = (register, errors, label) => {
  let name = label
  return {
    label: label.charAt(0).toUpperCase() + label.slice(1),
    inputProps: {
      ...register(name),
    },
    error: errors[name],
    helperText: errors[name]?.message,
  }
}
