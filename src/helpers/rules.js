export function ruleRequired(message = 'Không thể bỏ trống!', trigger = 'change') {
  return { 
    required: true,
    message,
    trigger
  } 
}
export function ruleDate(message = 'Không thể bỏ trống!', trigger = 'change') {
  return {
    type: 'date',
    required: true,
    message,
    trigger
  }
}