export function ruleRequired(message = 'Không thể bỏ trống!', trigger = 'change') {
  return { 
    required: true,
    message,
    trigger
  } 
}